import Link from 'next/link';
import FaqDropdown from './FaqDropdown';

// enum for FAQ type
enum FaqType {
  General = 'General',
  Homies = 'For Neurodivergent Individuals',
  SupportiveRoommates = 'For Supportive Roommates/Caregivers',
}

const faqs = [
  {
    question: 'What is Life-Sharing?',
    type: FaqType.General,
    home: true,
    expanded: true,
    answer: (
      <>
        <p>
          Life-sharing supports individuals with disabilities to live with
          qualified adults who provide support in their home.
        </p>
        <p>
          Life-sharing means living with and sharing life experiences with
          supportive persons who form a caring household. Life-sharing is
          recognized as both a close personal relationship and a place to live.
          Life-sharers offer individuals the opportunity to be part of a family
          and to participate in community life.
        </p>
        <p>
          Life-sharers and individuals are carefully matched and supported by
          qualified professionals to achieve the person's program objectives.
          Birth families are encouraged to be part of the matching process and
          continue to have close relationships with individuals who choose a
          life-sharing option.
        </p>
      </>
    ),
  },
  {
    question:
      'How can I learn more about Homies and stay up to date with the latest news and updates?',
    type: FaqType.General,
    answer: (
      <>
        <p>
          To learn more about Homies and stay informed about our latest news and
          updates, you can visit our website, sign up for our newsletter, and
          follow us on social media. We regularly share helpful resources,
          success stories, and updates about our program to keep our community
          informed and engaged.
        </p>
      </>
    ),
  },
  {
    question:
      'Can family members be involved in the selection process for a supportive roommate?',
    type: FaqType.Homies,
    answer: (
      <>
        <p>
          Yes, family members are encouraged to be involved in the selection
          process for a supportive roommate. Their input and perspective can be
          invaluable in finding the best match for their loved one. Homies is
          committed to working closely with both the individual with
          disabilities and their family to ensure a successful and lasting
          match.
        </p>
      </>
    ),
  },
  {
    question: 'How do I apply to become a supportive roommate?',
    type: FaqType.SupportiveRoommates,
    answer: (
      <>
        <p>
          If you are interested in becoming a supportive roommate, you can visit
          our website to begin the application process. Our team will review
          your information and reach out to discuss next steps, including a
          comprehensive assessment to determine your suitability and
          compatibility with potential roommates.
        </p>
      </>
    ),
  },
  {
    question:
      'What happens if a supportive roommate needs time off or has an emergency?',
    type: FaqType.General,

    answer: (
      <>
        <p>
          In the event that a supportive roommate needs time off or has an
          emergency, Homies will assist in finding temporary support or respite
          care to ensure that the individual with disabilities continues to
          receive the support they need. We understand that life happens, and we
          are here to provide solutions and support during challenging times.
        </p>
      </>
    ),
  },

  {
    question:
      'What resources are available for family members who want to support their loved ones in the Homies program?',
    type: FaqType.Homies,
    answer: (
      <>
        <p>
          We understand the important role that family plays in the lives of
          individuals with disabilities. Family members are encouraged to
          actively participate in the matching process and maintain close
          relationships throughout the program.
        </p>
      </>
    ),
  },
  {
    question:
      'How can I provide feedback or suggestions to improve the Homies program?',
    type: FaqType.General,

    answer: (
      <>
        <p>
          Your feedback and suggestions are invaluable to us. We invite you to
          share your thoughts with our team via email, phone, or through our
          website's contact form. Your input helps us continually improve and
          better serve our clients.
        </p>
      </>
    ),
  },
  {
    question: 'Can Homies help me find accessible housing options?',
    type: FaqType.Homies,
    answer: (
      <>
        <p>
          While Homies doesn't directly provide housing, our team is equipped to
          offer guidance and resources for finding accessible housing options
          that cater to your specific needs and preferences.
        </p>
      </>
    ),
  },
  {
    question:
      "Are there any additional costs or fees associated with using Homies' services?",
    type: FaqType.General,

    answer: (
      <>
        <p>
          There are no additional costs or fees for using Homies' services.
          However, clients are responsible for their own living expenses, such
          as rent, utilities, and any other associated costs.
        </p>
      </>
    ),
  },
  {
    question: 'How does Homies handle disputes or conflicts between roommates?',
    type: FaqType.General,

    answer: (
      <>
        <p>
          We strongly encourage open communication between roommates to resolve
          disputes amicably. If necessary, our team can step in to provide
          mediation and support, helping both parties find a mutually agreeable
          solution that ensures a harmonious living environment.
        </p>
      </>
    ),
  },
  {
    question:
      'What training or resources are provided for supportive roommates to better assist individuals with disabilities?',
    type: FaqType.General,

    answer: (
      <>
        <p>
          We are dedicated to empowering supportive roommates with the knowledge
          and skills needed to provide the best care possible. We offer training
          materials, resources to educate supportive roommates about various
          disabilities, effective communication strategies, and best practices
          for assistance.
        </p>
      </>
    ),
  },
  {
    question:
      'Can I request a change in my supportive roommate if we are not a good fit?',
    type: FaqType.Homies,
    answer: (
      <>
        <p>
          Absolutely. If you feel that your current supportive roommate is not
          the right fit, you can request a change. Our dedicated team will work
          closely with you to find a more suitable match and ensure a smooth and
          positive transition.
        </p>
      </>
    ),
  },
  {
    question:
      'How does Homies support both parties throughout the roommate relationship?',
    type: FaqType.General,
    home: true,

    answer: (
      <>
        <p>
          At Homies, we're all about creating and maintaining great roommate
          relationships for everyone involved. We offer support by giving you
          access to helpful resources, friendly guidance, and regular check-ins
          to make sure everything is going smoothly in your living situation.
        </p>
        <p>
          We know that open communication is key for a happy home life, so our
          team is always ready to listen and help with any concerns you may
          have. If there's a disagreement or misunderstanding, we'll step in and
          help find a solution that works for both parties.
        </p>
        <p>
          We also understand that life happens and things can change. Our team
          is here to support any adjustments you might need to make in your
          living arrangement, whether that's tweaking the way support is
          provided, offering extra resources, or even finding a new match if
          needed. Our main goal is to keep everyone in the Homies community
          feeling satisfied and successful in their roommate relationships.
        </p>
      </>
    ),
  },
  {
    question: 'How do you make sure supportive roommates are safe?',
    type: FaqType.Homies,
    home: true,
    answer: (
      <>
        <p>
          At Homies, we prioritize the safety of our participants and are
          dedicated to providing quality support. To ensure that supportive
          roommates are reliable and trustworthy, we follow a rigorous screening
          process. This includes verifying their full legal name and phone
          numbers and conducting comprehensive background checks through state
          criminal court systems and the Dru Sjodin National Sex Offender
          database.
        </p>
        <p>
          We also provide comprehensive training to our supportive roommates,
          equipping them with the knowledge and skills needed to effectively
          work with people with disabilities. This training covers best
          practices, effective communication strategies, and essential
          caregiving techniques to ensure a high standard of care and support.
        </p>
        <p>
          We also offer guidance and best practices for interacting with
          connections to promote safety and positive experiences. We enforce a
          zero-tolerance policy for behavior that violates our rules, and anyone
          engaging in inappropriate conduct will be flagged and permanently
          removed from our system. Our commitment to safety, security, and
          quality support remains a top priority throughout the entire roommate
          relationship.
        </p>
      </>
    ),
  },
  {
    question: 'What disqualifies me from being a supportive roommate?',
    type: FaqType.SupportiveRoommates,
    answer: (
      <>
        <p>
          An individual can be disqualified based on information from California
          or any other state that includes:
        </p>
        <ul>
          <li>
            a conviction, admission, or Alford plea, to any of the crimes listed
            in California statutes
          </li>
          <li>
            a preponderance of evidence that the subject committed an act that
            meets the definition of any of the crimes listed in California
            Statutes
          </li>
          <li>
            a finding of substantiated maltreatment of a minor or vulnerable
            adult that is determined to be serious and/or recurring as defined
            in California Statutes
          </li>
        </ul>
      </>
    ),
  },
  {
    question: 'How is the income tax-free?',
    type: FaqType.SupportiveRoommates,
    answer: (
      <>
        <p>
          The tax law allows individuals who receive family foster care payments
          to exclude them from gross income if all the following conditions are
          met:
        </p>
        <ul>
          <li>
            Payments are made pursuant to a foster care program of a State, and
            payments are paid by a State or political subdivision thereof, or a
            qualified agency;
          </li>
          <li>
            and payments are paid to a foster care provider for the care of a
            qualified foster individual in the foster care provider’s home.
          </li>
        </ul>
        <p>
          Since Homies is a service that connects two people that live in their
          own home on their own lease (and not in a group home or
          institutionalized setting), the income to the care provider is
          tax-free.
        </p>
        <p>Remember to consult your tax professional with any tax questions.</p>
      </>
    ),
  },
  {
    question: 'How can I sign up for Self Determination?',
    type: FaqType.Homies,
    answer: (
      <>
        <p>
          Connect with a local Independent Facilitator to learn more about how
          to sign up for Self Determination. Here is a growing list of contacts
          that can help you navigate the landscape. If you know of other
          resources please let us know!
        </p>
        <ul>
          <li>
            <a
              href="https://www.thecasdpnetwork.org"
              target="_blank"
              rel="noreferrer"
            >
              https://www.thecasdpnetwork.org
            </a>{' '}
            - A valuable resource connecting self-determining Californian’s with
            independent facilitators and other service providers.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: 'How is Homies funded?',
    type: FaqType.General,

    answer: (
      <>
        <p>
          California Regional Centers and through California’s Self
          Determination Program. To learn more about Self-Determination, please
          visit:{' '}
          <a
            href="https://www.dds.ca.gov/initiatives/sdp/"
            target="_blank"
            rel="noreferrer"
          >
            https://www.dds.ca.gov/initiatives/sdp/
          </a>
        </p>
      </>
    ),
  },
  {
    question: 'Which areas do you serve?',
    type: FaqType.General,

    answer: (
      <>
        <p>
          We are primarily focused on providing our matchmaking services to
          individuals in Southern California. However, if you are already living
          with your roommate, we can still provide ongoing support and
          resources, regardless of your location. We encourage you to sign up
          for our newsletter to stay up to date on when we will be available in
          your area.
        </p>
      </>
    ),
  },
  {
    question: 'Does my roommate have to pay for rent?',
    type: FaqType.SupportiveRoommates,
    answer: (
      <>
        <p>
          Yes, you will share living expenses with your supportive roommate if
          you are living outside of your family home or if you move into their
          home. Many of our clients use their social security/disability
          benefits to help pay the costs of their living expenses, including
          rent payment.
        </p>
      </>
    ),
  },
  {
    question: 'Will Homies provide housing?',
    type: FaqType.General,

    answer: (
      <>
        <p>
          We don’t provide housing, but we will help both parties find housing
          if it isn’t already available. Homies won’t get involved in any
          leasing or rental agreements.
        </p>
      </>
    ),
  },
  {
    question: 'How long does it take to find your roommate?',
    type: FaqType.General,

    answer: (
      <>
        <p>
          It can take anywhere from 1 to 6 months to find your roommate! We
          suggest meeting several times prior to moving in together. This is
          something you don’t want to rush, our matchmaking team at Homies will
          help you find your perfect match!
        </p>
      </>
    ),
  },
  {
    question:
      'How is compatibility determined between a person with disabilities and a potential supportive roommate?',
    type: FaqType.General,
    home: true,

    answer: (
      <>
        <p>
          Our team identifies each individual's needs, preferences, location,
          and lifestyle to determine compatibility. We consider various factors
          such as personal interests, required support, and living habits, to
          create a strong foundation for a successful and lasting match.
        </p>
      </>
    ),
  },
  {
    question:
      'I have an extra bedroom, can someone with disabilities move into the extra bedroom?',
    type: FaqType.SupportiveRoommates,
    answer: (
      <>
        <p>Yes!</p>
      </>
    ),
  },
  {
    question: 'What are some of the responsibilities for Supportive Roommates?',
    type: FaqType.SupportiveRoommates,
    answer: (
      <>
        <p>
          The most important requirement is that supportive roommates are there
          overnight. Other duties might include: hanging out with your roommate,
          eating dinner together, cooking, going to sporting events together,
          transporting your roommate to their job or event, reminding your
          roommate to pay bills or take medication.
        </p>
        <p>
          The responsibilities will vary depending on the individual. The goal
          is for this to be such a compatible match that it doesn’t really feel
          like work! You can think of it as living with a friend.
        </p>
      </>
    ),
  },
  {
    question: 'What is the salary for a supportive roommate?',
    type: FaqType.SupportiveRoommates,
    answer: (
      <>
        <p>
          The annual salary for supportive roommates ranges from $10,000 to
          $50,000 tax-free. It will depend on how many hours of support a week
          you provide for your roommate.
        </p>
      </>
    ),
  },
  {
    question: 'I have a family, can I still be a supportive roommate?',
    type: FaqType.SupportiveRoommates,
    answer: (
      <>
        <p>
          Of course, a lot of individuals with disabilities are looking to live
          with families.
        </p>
      </>
    ),
  },
  {
    question: 'Can someone have multiple roommates?',
    type: FaqType.General,

    answer: (
      <>
        <p>
          Absolutely! This program is all about choice. If you have friends that
          you would like to live with, you can do that. Our team will work with
          you to find the best match for your living situation and preferences.
        </p>
      </>
    ),
  },
  {
    question: 'If I become a supportive roommate, can I keep my current job?',
    type: FaqType.Homies,
    answer: (
      <>
        <p>
          Yes, you have the freedom to pick your own hours. Most supportive
          roommates have a job during the day (9am-5pm) and provide support for
          their roommate in the late evening and early morning hours.
        </p>
      </>
    ),
  },
  {
    question: 'Who can be my supportive roommate?',
    type: FaqType.Homies,
    home: true,
    answer: (
      <>
        <p>
          There are many options for individuals who can become your supportive
          roommate, such as:
        </p>
        <ul>
          <li>A friend</li>
          <li>A neighbor</li>
          <li>A co-worker</li>
          <li>Family members (parent, brother, sister, cousin, etc.)</li>
          <li>Former or current staff</li>
          <li>Someone from your school or university</li>
          <li>Someone from your place of worship</li>
          <li>
            Someone who has a job during the day and wants to be a roommate in
            the evening
          </li>
        </ul>
        <p>
          Homies believes in the importance of choice and will work with you to
          find a supportive roommate who is compatible with your lifestyle,
          interests, and needs.
        </p>
      </>
    ),
  },
].reduce((acc, item) => {
  const { type } = item;
  if (!acc[type]) {
    acc[type] = [];
  }
  acc[type].push(item);
  // acc[type].sort((a, b) => a.question.localeCompare(b.question));
  return acc;
}, {});

export default function Faq({ home = false }) {
  return (
    <section className="py-20 bg-yellow-100 sm:py-28">
      <div className="px-4 mx-auto lg:max-w-screen-lg sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-purple-900 h2">Frequently asked questions</h2>
          <p className="max-w-2xl mt-4 text-xl leading-relaxed text-purple-800 lg:text-left"></p>
        </div>

        {Object.keys(faqs).map((type) => (
          <div key={type}>
            {!home && (
              <h3 className="mt-16 mb-12 text-purple-900 h3">{type}</h3>
            )}
            <div className="relative">
              {faqs[type].map(
                (question, index) =>
                  ((home && question.home) || !home) && (
                    <FaqDropdown
                      expanded={question.expanded && home}
                      key={question.question}
                      question={question.question}
                      answer={question.answer}
                    />
                  )
              )}
            </div>
          </div>
        ))}

        {home ? (
          <div className="flex justify-center mt-12 xl:mt-14">
            <Link
              href="/faq"
              className="text-lg font-semibold text-purple-900 bg-yellow-500 btn hover:bg-yellow-600 group"
            >
              See all
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 ml-3 group-hover:animate-horizontal-bounce"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="5" y1="12" x2="19" y2="12" />
                <line x1="15" y1="16" x2="19" y2="12" />
                <line x1="15" y1="8" x2="19" y2="12" />
              </svg>
            </Link>
          </div>
        ) : (
          <div className="flex justify-center mt-12 xl:mt-14">
            <Link
              href="/contact"
              className="text-lg font-semibold text-purple-900 bg-yellow-500 btn hover:bg-yellow-600 group"
            >
              Have a question? Ask us!
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 ml-3 group-hover:animate-horizontal-bounce"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="5" y1="12" x2="19" y2="12" />
                <line x1="15" y1="16" x2="19" y2="12" />
                <line x1="15" y1="8" x2="19" y2="12" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
