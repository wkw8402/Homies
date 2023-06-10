import axios from 'axios';
import classNames from 'classnames';
import { signIn, signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import Loading from '../../../components/Loading';
import Button from '../../../components/shared/Button';
import { onboardingPages } from '../../../lib/onboardingPages';

const FormStep = () => {
  const router = useRouter();
  const {
    isReady,
    query: { step: stepArray },
  } = router;
  const [isLoading, setIsLoading] = useState(true);

  const { status, data: userData } = useSession();
  const { user } = userData || { user: null };

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    setError,
    getValues,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({ reValidateMode: 'onChange', mode: 'onSubmit' });

  console.log(getValues());

  const step = (stepArray as string[])?.join('/');
  const currentFormPage = onboardingPages.find((page) => page.step === step);
  const currentFormPageIndex = onboardingPages.findIndex(
    (page) => page.step === step
  );
  const nextStep = onboardingPages[currentFormPageIndex + 1]?.step;
  const prevStep = onboardingPages[currentFormPageIndex - 1]?.step;

  const onPreviousStep = () => {
    router.push(`/profile/onboarding/${prevStep}`);
  };

  const renderBack = useMemo(() => {
    return !prevStep || currentFormPage?.disableBack ? (
      <div />
    ) : (
      <button
        disabled={isLoading}
        className="text-gray-400 text-sm focus:outline-none focus:shadow-outline"
        onClick={onPreviousStep}
        type="button"
      >
        Back
      </button>
    );
  }, [prevStep, isLoading, currentFormPage?.disableBack]);

  const onSubmit = async (data) => {
    try {
      if (currentFormPage?.isAuth) {
        let res = await signIn('credentials', {
          username: data.email,
          password: data.password,
          redirect: false,
        });
        if (res.error) {
          setError('password', {
            type: 'manual',
            message: res.error,
          });
          return;
        }
      } else {
        await axios.post('/api/profile/onboarding', data);
      }

      if (nextStep) {
        router.push(`/profile/onboarding/${nextStep}`);
      } else {
        router.push('/profile/onboarding/complete');
      }
    } catch (error) {
      // console.error('Failed to save user progress:', error);
    } finally {
    }
  };

  useEffect(() => {
    if (isReady) {
      if (!currentFormPage) {
        router.replace('/profile/onboarding');
      } else {
        // force reset the component when navigating to a new page
        // this is to prevent the form from showing the previous page's data
        setIsLoading(false);

        // Reset the form when navigating to a new page
        reset();
        // Set the default values for the form
        currentFormPage?.blocks.forEach((block) => {
          setValue(block.fieldName, block.defaultValue);
        });
      }
    }
  }, [isReady, currentFormPage]);

  useEffect(() => {
    if (isReady) {
      // if the user is not logged in, redirect to the login page
      if (status === 'unauthenticated' && !currentFormPage?.isAuth) {
        router.replace('/profile/onboarding/get-started');
      } else if (status === 'authenticated' && currentFormPage?.isAuth) {
        router.replace('/profile/onboarding');
      } else if (
        status === 'authenticated' &&
        currentFormPage?.step.indexOf('get-started') > -1
      ) {
        router.replace('/profile/onboarding');
      }

      if (status && status !== 'loading') {
        setIsLoading(false);
      }
    }
  }, [isReady, status]);

  // Create an empty queue
  let queue = Promise.resolve();

  const handleCheckboxChange = (block, optionValue) => {
    // Enqueue the operation
    queue = queue.then(
      () =>
        new Promise((resolve) => {
          const currentValues = watch(block.fieldName);
          const isCurrentlyChecked = currentValues.includes(optionValue);

          if (isCurrentlyChecked) {
            // if the checkbox is currently checked, uncheck it
            setValue(
              block.fieldName,
              currentValues.filter((value) => value !== optionValue)
            );
          } else {
            // if the checkbox is currently unchecked, check it
            setValue(block.fieldName, [...currentValues, optionValue]);
          }
          if (errors[block.fieldName]) {
            trigger(block.fieldName);
          }

          resolve();
        })
    );
  };

  const renderProgressBar = useMemo(() => {
    const progress = currentFormPageIndex + 1 + '/' + onboardingPages.length;
    const progressPercentage = Math.round(
      (currentFormPageIndex / onboardingPages.length) * 100
    );

    if (currentFormPageIndex === 0) {
      return null;
    }

    return (
      <div className="flex items-center justify-between mb-6">
        {/* <div className="flex items-center">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-300 text-white mr-2">
            {progress}
          </div>
        </div> */}
        <div className="flex-1 items-center h-2 justify-center rounded-full relative">
          <div
            className="bg-purple-300 rounded-full z-10 absolute inset-0"
            style={{
              width: `${progressPercentage}%`,
            }}
          />
          <div className="bg-gray-100 rounded-full absolute inset-0" />
        </div>
        <div className="text-sm text-gray-400 ml-2">
          {progressPercentage}% complete
        </div>
      </div>
    );
  }, [currentFormPageIndex]);

  const showLoading = useMemo(() => {
    return isLoading || !currentFormPage || status === 'loading';
  }, [isLoading, status, currentFormPage]);

  return (
    <>
      <Head>
        <title>Onboarding - Homies</title>
      </Head>
      <div className="min-h-screen from-purple-50 bg-gradient-to-b pb-10 to-purple-100">
        <div className="w-full max-w-lg mx-auto py-5 px-4">
          <div className="flex items-center justify-between mt-2 mb-6">
            <Image
              width={390}
              height={124}
              className="w-32 h-auto rounded-t-md"
              src="/images/logo.png"
              alt="Homies Photo Collage"
            />
            {!!user && (
              <div>
                <button
                  className="text-sm text-gray-400"
                  onClick={() => signOut()}
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
          {showLoading ? (
            <div className="bg-white pt-6 items-center justify-center shadow-md rounded px-8 pb-8 mb-8">
              <Loading />
            </div>
          ) : (
            <form
              className="bg-white border border-gray-200 h-full shadow-xl rounded-lg px-6 sm:px-8 pt-6 pb-8 mb-8"
              onSubmit={handleSubmit(onSubmit)}
            >
              {renderProgressBar}
              <div className="mb-8">
                <h2 className="text-2xl leading-snug mb-4 font-semibold">
                  {currentFormPage.title}
                </h2>
                <p className="text-gray-600 whitespace-pre-line">
                  {currentFormPage.description}
                </p>
              </div>
              {currentFormPage?.blocks.map(
                (block, index) =>
                  (!block.showIf ||
                    (block.showIf &&
                      watch(block.showIf.fieldName) === block.showIf.value) ||
                    watch(block.showIf.fieldName)?.includes(
                      block.showIf.value
                    )) && (
                    <div key={index} className="mb-6 sm:mb-6">
                      <label className="block text-gray-700 font-bold mb-1">
                        {block.question}
                      </label>
                      {block.description && (
                        <p className="text-gray-500 whitespace-pre-line text-sm mb-2">
                          {block.description}
                        </p>
                      )}
                      {block.blockType === 'select' ? (
                        <select
                          key={block.fieldName}
                          id={block.fieldName}
                          defaultValue={''}
                          disabled={isSubmitting}
                          className="shadow appearance-none text-lg border border-gray-300 rounded-md w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          {...register(block.fieldName, block.rules)}
                        >
                          <option value="" disabled>
                            Select an option
                          </option>
                          {block.options.map((option, i) => (
                            <option
                              value={option.value}
                              disabled={option.disabled}
                              key={i}
                            >
                              {option.label}
                            </option>
                          ))}
                        </select>
                      ) : block.blockType === 'text' ||
                        block.blockType === 'email' ||
                        block.blockType === 'password' ? (
                        <input
                          key={block.fieldName}
                          id={block.fieldName}
                          disabled={isSubmitting}
                          type={block.blockType}
                          {...register(block.fieldName, block.rules)}
                          className="shadow appearance-none border border-gray-300 rounded-md w-full text-lg py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          placeholder={block.placeholder}
                        />
                      ) : block.blockType === 'textarea' ? (
                        <textarea
                          key={block.fieldName}
                          id={block.fieldName}
                          disabled={isSubmitting}
                          {...register(block.fieldName, block.rules)}
                          className="shadow appearance-none border border-gray-300 text-lg rounded-md w-full py-3 min-h-[40px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          placeholder={block.placeholder}
                        />
                      ) : block.blockType === 'radio' ? (
                        <div className="space-y-2">
                          {block.options.map((option, i) => (
                            <div
                              key={option.value}
                              onClick={() => {
                                if (!isSubmitting) {
                                  setValue(block.fieldName, option.value);
                                  if (errors[block.fieldName]) {
                                    trigger(block.fieldName);
                                  }
                                }
                              }}
                              className={classNames(
                                // if the value of the radio button is equal to the value of the option, then add the border-black class
                                'border px-3 py-3 rounded-md flex items-center cursor-pointer',
                                option.value === watch(block.fieldName)
                                  ? 'border-black bg-gray-100 text-black font-medium hover:border-black'
                                  : 'hover:border-gray-300 hover:text-black text-gray-500 hover:bg-gray-50'
                              )}
                            >
                              <input
                                id={option.value} // needed for the label to work correctly
                                readOnly={isSubmitting}
                                onClick={(e) => e.stopPropagation()}
                                type={block.blockType}
                                {...register(block.fieldName, block.rules)}
                                value={option.value}
                                className="mr-3 cursor-pointer"
                              />

                              <label
                                htmlFor={option.value}
                                onClick={(e) => e.stopPropagation()}
                                className="cursor-pointer"
                              >
                                {option.label}
                                {option.description && (
                                  <p className="text-xs font-normal text-gray-500">
                                    {option.description}
                                  </p>
                                )}
                              </label>
                            </div>
                          ))}
                        </div>
                      ) : block.blockType === 'checkbox' ? (
                        <div className="space-y-2">
                          {block.options.map((option, i) => (
                            <div
                              key={option.value}
                              onClick={(e) => {
                                if (!isSubmitting) {
                                  e.stopPropagation();
                                  handleCheckboxChange(block, option.value);
                                }
                              }}
                              className={classNames(
                                // if the value of the radio button is equal to the value of the option, then add the border-black class
                                'border px-3 py-3 rounded relative flex items-center cursor-pointer',
                                watch(block.fieldName)?.includes(option.value)
                                  ? 'border-black bg-gray-100 text-black font-medium hover:border-black'
                                  : 'hover:border-gray-300 hover:text-black text-gray-500 hover:bg-gray-50'
                              )}
                            >
                              <input
                                key={option.value}
                                disabled={isSubmitting}
                                onClick={(e) => e.stopPropagation()}
                                type="checkbox"
                                {...register(block.fieldName, block.rules)}
                                id={option.value} // needed for the label to work correctly
                                value={option.value}
                                className="mr-3 rounded"
                              />
                              <label
                                onClick={(e) => e.stopPropagation()}
                                htmlFor={option.value}
                              >
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      ) : block.blockType === 'chips' ? (
                        <div className="flex flex-wrap gap-2">
                          {block.options.map((option, i) => (
                            <div
                              key={option.value}
                              onClick={(e) => {
                                if (!isSubmitting) {
                                  e.stopPropagation();
                                  handleCheckboxChange(block, option.value);
                                }
                              }}
                              className={classNames(
                                'border px-3 py-1 rounded-full flex items-center cursor-pointer',
                                watch(block.fieldName)?.includes(option.value)
                                  ? 'border-black bg-gray-100 text-black hover:border-black'
                                  : 'hover:border-gray-300 hover:text-black text-gray-500 hover:bg-gray-50'
                              )}
                            >
                              <input
                                disabled={isSubmitting}
                                onClick={(e) => e.stopPropagation()}
                                type="checkbox"
                                {...register(block.fieldName, block.rules)}
                                id={option.value}
                                value={option.value}
                                className="mr-2 rounded cursor-pointer"
                              />
                              <label
                                onClick={(e) => e.stopPropagation()}
                                htmlFor={option.value}
                                className="cursor-pointer"
                              >
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      ) : block.blockType === 'html' ? (
                        <textarea
                          disabled={isSubmitting}
                          {...register(block.fieldName, block.rules)}
                          className="shadow appearance-none border border-gray-300 outline-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          placeholder={block.placeholder}
                        />
                      ) : null}

                      {errors[block.fieldName] && (
                        <p className="text-red-600 mt-1 text-xs italic">
                          {errors[block.fieldName].message as string}
                        </p>
                      )}
                    </div>
                  )
              )}

              <div className="flex items-center flex-row justify-between">
                {renderBack}

                <Button loading={isSubmitting} type="submit">
                  Continue
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default FormStep;
