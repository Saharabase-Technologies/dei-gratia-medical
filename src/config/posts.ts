/**
 * Health & Community posts. Content is stored as simple blocks and rendered by
 * the blog templates, so there's no MDX pipeline to maintain. When the client's
 * clinicians supply real, credited articles, replace these entries.
 */

export type Block =
  | { type: "h"; text: string }
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "note"; title?: string; text: string };

export type Post = {
  slug: string;
  title: string;
  tag: string;
  excerpt: string;
  date: string; // ISO
  readMinutes: number;
  image: string; // base path in /public/media/blog (no extension)
  intro: string;
  body: Block[];
  /** One post is highlighted at the top of the blog index. */
  featured?: boolean;
};

export const disclaimer =
  "This article is general information, not a substitute for seeing a clinician. If you are worried about your health, or your child's, please come in or call us.";

export const posts: Post[] = [
  {
    slug: "when-to-go-to-the-emergency-room",
    title: "When to come in straight away: knowing an emergency",
    tag: "Emergency",
    excerpt:
      "Some symptoms should never wait until morning. Here is how to tell an emergency from something that can wait, and what to do when every minute counts.",
    date: "2026-07-09",
    readMinutes: 4,
    image: "/media/blog/emergency-care",
    featured: true,
    intro:
      "It is not always easy to know when a health problem is an emergency. Waiting too long can be dangerous, but so can panic. Here are the warning signs that mean you should come to us at once, at any hour.",
    body: [
      { type: "h", text: "Come in straight away for any of these" },
      {
        type: "p",
        text: "Some signs point to a serious problem that needs care immediately. Do not wait at home if you or someone with you has:",
      },
      {
        type: "list",
        items: [
          "Chest pain or tightness, or trouble breathing",
          "Weakness on one side of the body, a drooping face, or slurred speech",
          "Heavy bleeding that will not stop",
          "A fit or convulsion, or fainting and not waking properly",
          "A very high fever with a stiff neck or a rash",
          "Severe pain in the belly, or repeated vomiting",
        ],
      },
      { type: "h", text: "For a child, also watch for" },
      {
        type: "list",
        items: [
          "Fast or difficult breathing, or the chest pulling in",
          "Becoming very sleepy, floppy, or hard to wake",
          "Not feeding or drinking, or far fewer wet nappies",
          "A fit, or a fever in a baby under three months",
        ],
      },
      { type: "h", text: "What to do while you come" },
      {
        type: "p",
        text: "Call us on the way so we are ready for you. Bring any medicines the person takes and their NHIS card or ID if it is close to hand, but never delay for paperwork in a true emergency.",
      },
      {
        type: "note",
        title: "We are open, always",
        text: "Our emergency team is here 24 hours a day, every day of the year. When in doubt, come in or call. It is always better to be checked.",
      },
    ],
  },
  {
    slug: "caring-for-your-newborn-first-weeks",
    title: "Caring for your newborn in the first weeks",
    tag: "Maternal care",
    excerpt:
      "The first weeks with a new baby are precious and tiring. A few simple things keep your baby safe and well, and tell you when to seek help.",
    date: "2026-07-02",
    readMinutes: 5,
    image: "/media/blog/newborn-care",
    intro:
      "Bringing a new baby home is a joy, and it can also feel overwhelming. In the first weeks a few simple habits keep your baby healthy, and knowing the danger signs helps you act quickly if something is wrong.",
    body: [
      { type: "h", text: "Feeding" },
      {
        type: "p",
        text: "Breast milk is the best food for your baby and helps protect against infection. Feed on demand, whenever your baby is hungry, day and night. If feeding is painful or you are unsure your baby is getting enough, come and let us help, do not struggle alone.",
      },
      { type: "h", text: "Keeping baby warm and clean" },
      {
        type: "p",
        text: "Keep the cord stump clean and dry and let it heal on its own. Bath your baby gently and dress them for the weather, warm but not hot. Always wash your hands before handling your baby.",
      },
      { type: "h", text: "Safe sleep" },
      {
        type: "p",
        text: "Lay your baby on their back to sleep, on a firm, flat surface, and keep the face clear. A treated mosquito net protects against malaria from the very first days.",
      },
      { type: "h", text: "Danger signs, do not wait" },
      {
        type: "list",
        items: [
          "A fever, or the body feeling cold",
          "Fast, difficult, or noisy breathing",
          "Not feeding, or vomiting everything",
          "Yellow colour of the skin or eyes",
          "Being very sleepy, floppy, or hard to wake",
          "Fits, or the cord area red, swollen, or smelling",
        ],
      },
      {
        type: "note",
        title: "Come for your check-ups",
        text: "Your baby's weight checks and vaccinations keep them protected and let us catch any problem early. Our maternal and child health team is here for both of you.",
      },
    ],
  },
  {
    slug: "understanding-your-lab-tests",
    title: "Understanding your lab tests: what the results mean",
    tag: "Diagnostics",
    excerpt:
      "A blood or urine test can feel like a mystery. Here is what the common tests are for, and why testing beats guessing when you are unwell.",
    date: "2026-06-28",
    readMinutes: 4,
    image: "/media/blog/lab-tests",
    intro:
      "When you are unwell, a simple test often gives the clearest answer. Our laboratory is on-site, so results come back quickly and your care does not have to wait. Here is what some common tests are for.",
    body: [
      { type: "h", text: "Why test at all?" },
      {
        type: "p",
        text: "Many illnesses look alike from the outside. A fever could be malaria, typhoid, or something else entirely, and each needs different treatment. Testing tells us what is really going on, so you get the right medicine the first time.",
      },
      { type: "h", text: "Some tests you may be offered" },
      {
        type: "list",
        items: [
          "Malaria test, a quick check when you have a fever",
          "Full blood count, which can point to infection or anaemia",
          "Blood sugar, to check for or monitor diabetes",
          "Urine tests, for infection or in pregnancy",
          "Blood pressure, taken at almost every visit",
        ],
      },
      { type: "h", text: "Preparing for a test" },
      {
        type: "p",
        text: "Some blood tests ask you not to eat for a few hours beforehand, we will tell you if yours does. Otherwise, just come as you are, and bring any earlier results you have so we can compare.",
      },
      {
        type: "note",
        title: "Answers, sooner",
        text: "Because our lab is here in the building, most results are ready the same visit. Bring your NHIS card, many tests are covered.",
      },
    ],
  },
  {
    slug: "malaria-in-children-signs-to-know",
    title: "Malaria in children: the signs every parent should know",
    tag: "Family health",
    excerpt:
      "In young children malaria can turn serious quickly. Knowing the signs, and acting fast, keeps a small illness from becoming an emergency.",
    date: "2026-06-18",
    readMinutes: 4,
    image: "/media/blog/malaria",
    intro:
      "Malaria is common here, and in young children it can turn serious quickly. Knowing the signs, and acting fast, can keep a small illness from becoming an emergency.",
    body: [
      { type: "h", text: "The signs to watch for" },
      {
        type: "p",
        text: "Malaria does not always look the same, but in children these are the common signs:",
      },
      {
        type: "list",
        items: [
          "A fever, or a hot body",
          "Chills and shivering",
          "Not feeding or eating well",
          "Vomiting",
          "Being unusually tired or weak",
          "Headache or body pains",
        ],
      },
      { type: "h", text: "Get a test, do not guess" },
      {
        type: "p",
        text: "Not every fever is malaria, and treating the wrong thing wastes precious time. A quick test in our laboratory gives a clear answer, so your child gets the right treatment straight away.",
      },
      { type: "h", text: "When it is an emergency" },
      {
        type: "p",
        text: "Some signs mean you should not wait at all. Come to us at once, at any hour, if your child has:",
      },
      {
        type: "list",
        items: [
          "A fit or convulsion",
          "Become very sleepy or hard to wake",
          "Fast or difficult breathing",
          "Stopped drinking or feeding",
          "Repeated vomiting",
        ],
      },
      { type: "h", text: "Preventing malaria" },
      {
        type: "list",
        items: [
          "Have everyone sleep under a treated mosquito net",
          "Clear stagnant water around the home where mosquitoes breed",
          "Keep the compound clean and cut back overgrown bush",
        ],
      },
      {
        type: "note",
        title: "We are here",
        text: "We have malaria testing on-site and accept NHIS. Please do not wait on a child's fever, come in or call us.",
      },
    ],
  },
  {
    slug: "high-blood-pressure-the-silent-risk",
    title: "High blood pressure: the silent risk worth checking",
    tag: "Heart health",
    excerpt:
      "High blood pressure often has no symptoms at all, yet it quietly raises the risk of stroke and heart disease. A simple check can protect you.",
    date: "2026-06-10",
    readMinutes: 5,
    image: "/media/blog/hypertension",
    intro:
      "High blood pressure, or hypertension, is common and often causes no symptoms until it has already done harm. The good news is that a simple check takes minutes, and once you know, it can be managed well.",
    body: [
      { type: "h", text: "Why it matters" },
      {
        type: "p",
        text: "Blood pressure that stays high puts strain on the heart and blood vessels over time. Left unchecked, it raises the risk of stroke, heart disease, and kidney problems. Because it rarely causes symptoms, many people do not know they have it.",
      },
      { type: "h", text: "Who should get checked" },
      {
        type: "list",
        items: [
          "Every adult, at least once a year",
          "Anyone with a parent or sibling who has hypertension",
          "People who are overweight, or who smoke",
          "Women during pregnancy, at every antenatal visit",
        ],
      },
      { type: "h", text: "Simple steps that help" },
      {
        type: "list",
        items: [
          "Use less salt in cooking and at the table",
          "Eat more fruit and vegetables, and less fried and fatty food",
          "Stay active, even a brisk daily walk helps",
          "If you smoke, stop, and keep alcohol low",
          "Take any prescribed medicine every day, even when you feel well",
        ],
      },
      {
        type: "note",
        title: "It only takes a minute",
        text: "We check blood pressure at almost every visit. If you have not had yours checked this year, ask us, it is quick, painless, and could protect your life.",
      },
    ],
  },
  {
    slug: "antenatal-visits-what-to-expect",
    title: "Antenatal visits: what to expect at every stage",
    tag: "Maternal care",
    excerpt:
      "Antenatal care keeps you and your baby healthy and catches problems early. Here is what happens at your visits, and the signs never to ignore.",
    date: "2026-05-20",
    readMinutes: 5,
    image: "/media/blog/antenatal",
    intro:
      "Antenatal care is the check-ups you attend during pregnancy. They keep you and your baby healthy, catch problems early, and prepare you for a safe delivery. Here is what to expect.",
    body: [
      { type: "h", text: "Start early" },
      {
        type: "p",
        text: "Book your first visit as soon as you think you are pregnant. The earlier you start, the more we can do to keep you and your baby well through the months ahead.",
      },
      { type: "h", text: "Your first visit" },
      {
        type: "p",
        text: "We will talk through your health and any past pregnancies, check your blood pressure and weight, and take simple blood and urine tests. It is also your time to ask anything that is on your mind, nothing is too small.",
      },
      { type: "h", text: "Along the way" },
      {
        type: "p",
        text: "You will come in regularly so we can follow your baby's growth and your own health. That may include an ultrasound scan, a tetanus vaccine, and supplements such as folic acid and iron when they are needed.",
      },
      { type: "h", text: "Danger signs, do not wait" },
      {
        type: "p",
        text: "Most pregnancies go smoothly, but come in straight away if you notice any of these:",
      },
      {
        type: "list",
        items: [
          "Bleeding from the vagina",
          "A severe headache, or blurred vision",
          "Swelling of the face or hands",
          "Strong or constant pain in the belly",
          "Your baby moving much less than usual",
          "A fever that will not settle",
        ],
      },
      {
        type: "note",
        title: "Good to know",
        text: "Antenatal care is covered by NHIS, so bring your card. Our maternal and child health team will walk with you the whole way.",
      },
    ],
  },
  {
    slug: "childhood-vaccinations-keeping-on-track",
    title: "Keeping your child's vaccinations on track",
    tag: "Family health",
    excerpt:
      "Vaccines protect your child from serious diseases. Here is why the schedule matters, and what to do if a dose has been missed.",
    date: "2026-05-05",
    readMinutes: 4,
    image: "/media/blog/child-vaccines",
    intro:
      "Vaccination is one of the simplest, most powerful ways to keep your child healthy. It protects them from diseases that can be serious or even deadly, and helps protect the whole community too.",
    body: [
      { type: "h", text: "Why the timing matters" },
      {
        type: "p",
        text: "Vaccines are given at set ages because that is when they work best and when your child most needs the protection. Following the schedule means your child is covered as early as possible.",
      },
      { type: "h", text: "What vaccines protect against" },
      {
        type: "p",
        text: "The childhood vaccines guard against illnesses such as measles, whooping cough, tetanus, polio, tuberculosis, and more, diseases that can cause lasting harm in young children.",
      },
      { type: "h", text: "If you have missed a dose" },
      {
        type: "p",
        text: "Do not worry, and do not skip it. In most cases we can simply catch up. Bring your child's health record book and we will check what is due and get them back on track.",
      },
      {
        type: "note",
        title: "Bring the record book",
        text: "Keep your child's vaccination card safe and bring it to every visit. Childhood immunisations are provided free, come and let us keep your child protected.",
      },
    ],
  },
  {
    slug: "staying-well-harmattan-season",
    title: "Staying well through the harmattan season",
    tag: "Seasonal health",
    excerpt:
      "The dry, dusty harmattan winds can be hard on your skin, chest, and eyes. A few simple habits keep the whole family well.",
    date: "2025-12-05",
    readMinutes: 4,
    image: "/media/blog/harmattan",
    intro:
      "From about November to March, the harmattan brings dry, dusty winds down from the Sahara. The air turns hazy, the days feel cooler, and the dryness can be hard on the body. A few simple habits will help you and your family stay well through the season.",
    body: [
      { type: "h", text: "Drink more water than you think you need" },
      {
        type: "p",
        text: "The dry air pulls moisture from your body without you noticing. Keep water close by and sip through the day, even when you are not thirsty. Young children and older relatives dry out the fastest, so gently remind them to drink often.",
      },
      { type: "h", text: "Care for dry skin and lips" },
      {
        type: "p",
        text: "Cracked skin and lips are the season's most common complaint. Moisturise after every bath while the skin is still a little damp, shea butter or any plain cream works well, and reapply to hands, feet, and lips during the day.",
      },
      { type: "h", text: "Protect your chest and throat" },
      {
        type: "p",
        text: "Fine dust irritates the airways and can bring on coughing, catarrh, and sore throats. It can also trigger asthma. Try to keep dust down at home, cover your nose and mouth with a cloth on dusty days, and if you use an inhaler, keep it with you.",
      },
      { type: "h", text: "Look after your eyes" },
      {
        type: "p",
        text: "Dust in the eyes causes redness and itching. Rinse gently with clean water rather than rubbing, which only makes it worse. If redness, pain, or discharge lasts more than a day or two, come and let us look.",
      },
      {
        type: "note",
        title: "When to see us",
        text: "A cough or breathing that will not settle, wheezing, eye pain or discharge, or a fever that stays. Come to Dei Gratia and we will check you over.",
      },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

/** Tags in first-seen order, for the blog filter. */
export const postTags = Array.from(new Set(posts.map((p) => p.tag)));

export const formatDate = (iso: string) =>
  new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" }).format(
    new Date(iso)
  );
