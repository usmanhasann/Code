import { Accordion } from "./Accordion";

export const Faq = () => {
  const faqs = [
    {
      id: 1,
      question: "Why should I use CodeVault?",
      answer:
        " Using CodeVault brings structure, efficiency, and ease to your coding experience. It serves as a centralized platform, ensuring you can access and manage all your code resources seamlessly. With built-in tools for tracking, organizing, and collaborating, CodeVault minimizes time spent on repetitive tasks and maximizes productivity!",
    },
    {
      id: 2,
      question: "Can I access my CodeVault on mobile?",
      answer:
        "Yes, you can access your CodeVault on mobile! Our platform is fully optimized for mobile devices, so you can enjoy your eCourses anytime, anywhere.  Enjoy the flexibility of accessing your favorite CodeVault wherever you are, without needing a computer.!",
    },
    {
      id: 3,
      question: "Do you offer refunds?",
      answer:
        "Yes, we do offer refunds. We understand that circumstances can change, and we’re committed to ensuring customer satisfaction. If you’re not fully satisfied with your purchase, please reach out within our refund policy timeframe!",
    },
    {
      id: 4,
      question: "Do you support Internation payments?",
      answer:
        "Yes, we support international payments! Our platform accepts a variety of payment methods from around the world, making it easy and convenient for customers globally.",
    },
  ];

  return (
    <section className="my-10 p-7 border rounded dark:border-slate-700 shadow-sm">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-3 underline underline-offset-8">
        Question in mind?
      </h1>
      <div
        className=""
        id="accordion-flush"
        data-accordion="collapse"
        data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
        data-inactive-classes="text-gray-500 dark:text-gray-400"
      >
        {faqs.map((faq) => (
          <Accordion key={faq.id} faq={faq} />
        ))}
      </div>
    </section>
  );
};
