import axios from 'axios';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Loading from '../../../components/Loading';
import Button from '../../../components/shared/Button';
import { onboardingPages } from '../../../lib/onboardingPages';

const FormStep = () => {
  const router = useRouter();
  const {
    isReady,
    query: { step },
  } = router;
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    watch,
    formState: { errors },
  } = useForm({ reValidateMode: 'onChange', mode: 'onChange' });

  const currentFormPage = onboardingPages.find((page) => page.step === step);
  const currentFormPageIndex = onboardingPages.findIndex(
    (page) => page.step === step
  );
  const nextStep = onboardingPages[currentFormPageIndex + 1]?.step;
  const prevStep = onboardingPages[currentFormPageIndex - 1]?.step;

  const onPreviousStep = () => {
    if (!prevStep) {
      return;
    }
    router.push(`/profile/onboarding/${prevStep}`);
  };

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      await axios.post('/api/profile/onboarding', data);
      if (nextStep) {
        router.push(`/profile/onboarding/${nextStep}`);
      } else {
        router.push('/profile/onboarding/complete');
      }
    } catch (error) {
      console.error('Failed to save user progress:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isReady && !currentFormPage) {
      router.replace('/profile/onboarding');
    }
  }, [isReady, currentFormPage]);

  if (!currentFormPage) {
    return (
      <div className="w-full max-w-md mx-auto py-5">
        <div
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-8">
            <h2 className="text-2xl font-semibold">Loading...</h2>
          </div>
          <Loading />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto py-5">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">{currentFormPage.title}</h2>
          <p className="text-gray-600">{currentFormPage.description}</p>
        </div>
        {currentFormPage?.blocks.map((block, index) => (
          <div key={index} className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              {block.question}
            </label>
            {block.fieldType === 'select' ? (
              <select
                defaultValue={''}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register(block.fieldName, block.rules)}
              >
                <option value="" disabled>
                  Select an option
                </option>
                {block.options.map((option, index) => (
                  <option
                    value={option.value}
                    disabled={option.disabled}
                    key={index}
                  >
                    {option.label}
                  </option>
                ))}
              </select>
            ) : block.fieldType === 'text' ? (
              <input
                type={block.fieldType}
                autoFocus={index === 0}
                {...register(block.fieldName, block.rules)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder={block.placeholder}
              />
            ) : block.fieldType === 'radio' ? (
              <div className="space-y-2 mb-8">
                {block.options.map((option, index) => (
                  <div
                    key={option.value}
                    onClick={() => {
                      setValue(block.fieldName, option.value);
                      trigger(block.fieldName);
                    }}
                    className={classNames(
                      // if the value of the radio button is equal to the value of the option, then add the border-black class
                      'border px-3 py-3 rounded flex items-center cursor-pointer',
                      option.value === watch(block.fieldName)
                        ? 'border-black bg-gray-100 text-black font-medium hover:border-black'
                        : 'hover:border-gray-300 hover:text-black text-gray-500 hover:bg-gray-50'
                    )}
                  >
                    <label className="cursor-pointer">
                      <input
                        autoFocus={index === 0}
                        type={block.fieldType}
                        {...register(block.fieldName, block.rules)}
                        value={option.value}
                        className="mr-3 mb-0.5 cursor-pointer"
                      />
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            ) : block.fieldType === 'checkbox' ? (
              <div className="space-y-2">
                {block.options.map((option, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setValue(block.fieldName, option.value);
                    }}
                    className={classNames(
                      // if the value of the radio button is equal to the value of the option, then add the border-black class
                      {
                        'border-black bg-gray-100':
                          option.value === watch(block.fieldName),
                      },
                      'border px-3 py-3 rounded flex items-center hover:bg-gray-100 cursor-pointer hover:border-black'
                    )}
                  >
                    <label>
                      <input
                        type={block.fieldType}
                        {...register(block.fieldName, block.rules)}
                        value={option.value}
                        className="mr-3 mb-0.5 rounded"
                      />
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            ) : block.fieldType === 'html' ? (
              <textarea
                {...register(block.fieldName, block.rules)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder={block.placeholder}
              />
            ) : null}

            {errors[block.fieldName] && (
              <p className="text-red-500 mt-1 text-xs italic">
                {errors[block.fieldName].message as string}
              </p>
            )}
          </div>
        ))}

        <div className="flex items-center flex-row justify-between">
          {!prevStep ? (
            <div />
          ) : (
            <button
              disabled={isLoading}
              className="text-gray-400 py-2 px-2 focus:outline-none focus:shadow-outline"
              onClick={onPreviousStep}
              type="button"
            >
              Previous
            </button>
          )}

          <Button loading={isLoading} type="submit">
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FormStep;
