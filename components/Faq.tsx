import FaqDropdown from "./FaqDropdown";

const faqs = [
  {
    question: "What is Life-Sharing?",
    answer: (
      <>
        Lifesharing supports individuals with disabilities to live with
        qualified adults who provide support in their home. <br />
        <br /> Lifesharing means living with and sharing life experiences with
        supportive persons who form a caring household. Lifesharing is
        recognized as both a close personal relationship and a place to live.
        Lifesharers offer individuals the opportunity to be part of a family and
        to participate in community life. Lifesharers and individuals are
        carefully matched and supported by qualified professionals to achieve
        the person's program objectives. Birth families are encouraged to be
        part of the matching process and continue to have close relationships
        with individuals who choose a lifesharing option.
      </>
    ),
  },
  {
    question: "If I become a supportive roommate, can I keep my current job?",
    answer: (
      <>
        Yes, you have the freedom to pick your own hours. Most supportive
        roommates have a job during the day (9am-5pm) and provide support for
        their roommate in the late evening and early morning hours.
      </>
    ),
  },
  {
    question: "I have a family, can I still be a supportive roommate?",
    answer: (
      <>
        Of course, a lot of individuals with disabilities are looking to live
        with families.
      </>
    ),
  },
  {
    question: "What is the salary for a supportive roommate?",
    answer: (
      <>
        The salary for supportive roommates range from $12,000- $40,000
        tax-free. It will depend on how many hours of support a week you provide
        for your Homie.
      </>
    ),
  },
  {
    question: "What are some of the responsibilities for Supportive Roommates?",
    answer: (
      <>
        The most important requirement is that supportive roommates are there
        overnight. Other duties might include: hanging out with your homie,
        eating dinner together, cooking, going to a sporting events together,
        transporting your homie to their job or event, reminding homie to pay
        bills or take medication, and personal care. <br /> <br /> The
        responsibilities will vary depending on the individual. The goal is for
        this to be such a compatible match that this doesn&rsquo;t really feel
        like work! You are living with your homie.
      </>
    ),
  },
  {
    question:
      "I have an extra bedroom, can someone with disabilities move into the extra bedroom?",
    answer: <>Yes!</>,
  },
  {
    question: "How long does it take to find your Homie?",
    answer: (
      <>
        It can take anywhere from 1 to 6 months to find your roommate! We
        suggest meeting several times prior to moving in together. This is
        something you don&rsquo;t want to rush, our matchmaking team at Homies
        will help you find your perfect match!
      </>
    ),
  },
  {
    question: "Will Homies provide housing?",
    answer: (
      <>
        We don&rsquo;t provide housing, but we will help both parties find
        housing if it isn&rsquo;t already available. Homies won&rsquo;t get
        involved in any leasing or rental agreements.
      </>
    ),
  },
  {
    question: "Does the Homie have to pay for rent?",
    answer: (
      <>
        Yes, you will share living expenses with your supportive roommate if you
        are living outside of your family home or if you move into their home.
        Many of our clients use their social security/disability benefits to
        help pay the costs of their living expenses, including rent payment.
      </>
    ),
  },
  {
    question: "Which areas do you serve?",
    answer: (
      <>
        The entire state of California. We are accepting individuals who want to
        participate in our pilot program before we open it fully to the public.
      </>
    ),
  },
  {
    question: "How is this funded?",
    answer: (
      <>
        California Regional Centers and Self Determination Program.
        <br /> <br /> To learn more about Self-Determination, please visit:{" "}
        <a href="https://www.dds.ca.gov/initiatives/sdp/" target="_blank">
          https://www.dds.ca.gov/initiatives/sdp/
        </a>
      </>
    ),
  },
  {
    question: "How is the income tax-free?",
    answer: (
      <>
        The tax law allows individuals who receive family foster care payments
        to exclude them from gross income if all the following conditions are
        met: <br /> <br />
        <ul className="ml-4">
          <li>
            &ndash; Payments are made pursuant to a foster care program of a
            State, and payments are paid by a State or political subdivision
            thereof, or a qualified agency;
          </li>
          <li>
            &ndash; and payments are paid to a foster care provider for the care
            of a qualified foster individual in the foster care provider&rsquo;s
            home.
          </li>
        </ul>
        <br /> Since Homies is a service that connects two people that live in
        their own home on their own lease (and not in a group home or
        institutionalized setting), the income to the care provider is tax-free.{" "}
        <br /> <br /> Remember to consult your tax professional with any tax
        questions.
      </>
    ),
  },
  {
    question: "How can I sign up for Self Determination?",
    answer: (
      <>
        Connect with a local Independent Facilitator to learn more about how to
        sign up for Self Determination. Here is a growing list of contacts that
        can help you navigate the landscape. If you know of other resources
        please let us know! <br /> <br />
        <a href="https://phoenixfacilitation.org" target="_blank">
          https://phoenixfacilitation.org - Contact Naomi Hagel at
          naomi@gophoenix.org. She is an independent facilitator that
          specializes in self determination. <br /> <br />
        </a>
        <a href="https://www.thecasdpnetwork.org" target="_blank">
          https://www.thecasdpnetwork.org
        </a>{" "}
        - A valuable resource connecting self-determining Californian&rsquo;s
        with independent facilitators and other service providers.
      </>
    ),
  },
  {
    question: "What disqualifies me from being a supportive roommate?",
    answer: (
      <>
        An individual can be disqualified based on information from Califonriaor
        any other state that includes: <br />
        <ul className="ml-4">
          <li>
            - a conviction, admission, or Alford plea, to any of the crimes
            listed in California statutes
          </li>
          <li>
            - a preponderance of evidence that the subject committed an act that
            meets the definition of any of the crimes listed in California
            Statues
          </li>
          <li>
            - a finding of substantiated maltreatment of a minor or vulnerable
            adult that is determined to be serious and/or recurring as defined
            in California Statutes
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "How do you make sure supportive roommates are safe?",
    answer: (
      <>
        We require full legal name and phone numbers, so that we can call to
        verify. We also run background checks through the state criminal court
        system as well as &ldquo;Dru Sjodin National Sex Offender&rdquo; system.{" "}
        <br /> <br /> We also offer guidance on how to engage with connections
        to ensure safety. There is zero tolerance for behavior that breaks our
        rules; those that do engage in inappropriate behavior will be flagged
        and banned from our system.
      </>
    ),
  },
];

export default function Faq() {
  return (
    <section className="py-20 bg-yellow-100 sm:py-28">
      <div className="px-4 mx-auto lg:max-w-screen-lg sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-purple-900 h2">Frequently asked questions</h2>
          <p className="max-w-2xl mt-4 text-xl leading-relaxed text-purple-800 lg:text-left"></p>
        </div>
        <ul className="relative mt-12 space-y-6">
          <ul className="relative mt-12 space-y-6"></ul>
        </ul>
        <div>
          <img
            className="absolute hidden h-auto w-28 -left-60 top-10 2xl:block"
            src="/icons/question-mark.svg"
            alt=""
          />
          <img
            className="absolute hidden h-auto w-28 -right-60 bottom-10 2xl:block"
            src="/icons/bulb.svg"
            alt=""
          />
        </div>
        <ul className="relative mt-12 space-y-6">
          {faqs.map((question, index) => (
            <FaqDropdown
              key={question.question}
              question={question.question}
              answer={question.answer}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
