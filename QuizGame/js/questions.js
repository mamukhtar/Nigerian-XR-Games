// Basic quiz mechanics will be implemented here
let currentQuestionIndex = 0;
export const generalQuestions = [
    { question: "What is the capital of Nigeria?", answers: ["Abuja", "Lagos", "Kano", "Port Harcourt"], correctIndex: 0,  image: 'assets/images/C1-Q1.jpg' },
    { question: "What is the largest city in Nigeria by population?", answers: ["Abuja", "Lagos", "Kano", "Ibadan"], correctIndex: 1, image: 'assets/images/C1-Q2.jpg' },
    { question: "Which river is the longest in Nigeria?", answers: ["River Niger", "River Benue", "River Kaduna", "River Osun"], correctIndex: 0, image: 'assets/images/C1-Q3.jpg' },
    { question: "In what year did Nigeria become a republic?", answers: ["1960", "1963", "1966", "1979"], correctIndex: 1, image: 'assets/images/C1-Q4.jpg' },
    { question: "Which Nigerian state is known as the 'Land of Hospitality'?", answers: ["Kano", "Lagos", "Sokoto", "Cross River"], correctIndex: 3, image: 'assets/images/C1-Q5.jpg' },
    { question: "What is the dominant vegetation zone in northern Nigeria?", answers: ["Mangrove", "Rainforest", "Savannah", "Sahel"], correctIndex: 2, image: 'assets/images/C1-Q6.jpg' },
    { question: "Which Nigerian state is known for its limestone caves (Awhum Caves)?", answers: ["Plateau", "Enugu", "Ogun", "Cross River"], correctIndex: 1, image: 'assets/images/C1-Q7.jpg' },
    { question: "Which Nigerian city is often referred to as the 'Centre of Learning'?", answers: ["Kaduna", "Zaria", "Ibadan", "Lagos"], correctIndex: 0, image: 'assets/images/C1-Q8.jpg' },
    { question: "Which region in Nigeria is oil primarily extracted from?", answers: ["North Central", "North East", "South East", "Niger Delta"], correctIndex: 3, image: 'assets/images/C1-Q9.jpg' },
    { question: "What is Nigeria's official language?", answers: ["English", "Hausa", "Yoruba", "Igbo"], correctIndex: 0, image: 'assets/images/C1-Q10.jpg' }

];

export const artQuestions = [
    { question: "Who is a famous Nigerian painter known for his unique style of art?", answers: ["Yusuf Grillo", "Ben Enwonwu", "Bruce Onobrakpeya", "Nike Davies-Okundaye"], correctIndex: 1, image: 'assets/images/C2-Q1.jpg'},
    { question: "The Nok culture is known for what type of art in Nigeria?", answers: ["Terracotta sculptures", "Bronze casting", "Wood carvings", "Ivory carving"], correctIndex: 0,  image: 'assets/images/C2-Q2.jpg'},
    { question: "Which city is considered the center of the Nigerian movie industry, also known as Nollywood?", answers: [ "Abuja", "Kano", "Enugu", "Lagos"], correctIndex: 3, image: 'assets/images/C2-Q3.jpg'},
    { question: "What is the famous Nigerian art festival that showcases films, music, literature, and more?", answers: ["Calabar Carnival", "Lagos Art Fair", "Ake Arts and Book Fest.", "Osun-Osogbo Festival"], correctIndex: 2, image: 'assets/images/C2-Q4.jpg'},
    { question: "Which Nigerian artist is known for his intricate print paintings?", answers: ["El Anatsui", "Bruce Onobrakpeya", "Victor Ehikhamenor", "Peju Alatise"], correctIndex: 1, image: 'assets/images/C2-Q5.jpg'},
    { question: "What ancient Nigerian city is renowned for its brass and bronze sculpture work?", answers: ["Lagos", "Ife", "Kano", "Benin City"], correctIndex: 3, image: 'assets/images/C2-Q6.jpg'},
    { question: "Which art movement in Nigeria is represented by the Zaria Arts Society?", answers: ["Natural Synthesis", "Modernism", "Nok Art", "Uli"], correctIndex: 0, image: 'assets/images/C2-Q7.jpg' },
    { question: "Which Nigerian city is famous for its indigo-dyed cloth called adire?", answers: ["Kano", "Abeokuta", "Lagos", "Jos"], correctIndex: 1, image: 'assets/images/C2-Q8.jpg' },
    { question: "Who is a contemporary Nigerian photographer renowned for her documentary projects?", answers: ["J.D. 'Okhai Ojeikere", "Kelechi Amadi-Obi", "Yagazie Emezi", "Toyin Sokefun-Bello"], correctIndex: 2, image: 'assets/images/C2-Q9.jpg' },
    { question: "Which Nigerian independent artist is Patendoyart?", answers: ["Victor Ehikhamenor", "Laolu Senbanjo", "Jelili Atiku", "Zara A"], correctIndex: 3, image: 'assets/images/C2-Q10.jpg' }
];

export const historyQuestions = [
    { question: "In what year did Nigeria gain independence from Britain?", answers: ["1970", "1963", "1957", "1960"], correctIndex: 3, image: 'assets/images/C3-Q1.jpg' },
    { question: "Who was the first president of Nigeria?", answers: ["Nnamdi Azikiwe", "Olusegun Obasanjo", "Shehu Shagari", "Goodluck Jonathan"], correctIndex: 0, image: 'assets/images/C3-Q2.jpg' },
    { question: "What ancient Nigerian civilization was known for its terracotta figurines and iron smelting?", answers: ["Ife", "Benin", "Nok", "Oyo"], correctIndex: 2, image: 'assets/images/C3-Q3.jpg' },
    { question: "Which empire was famous in Northern Nigeria before the 19th century?", answers: ["Kanem-Bornu Empire", "The Oyo Empire", "The Benin Empire", "The Sokoto Caliphate"], correctIndex: 0, image: 'assets/images/C3-Q4.jpg' },
    { question: "What were the major trade items from Nigeria during the trans-Saharan trade?", answers: ["Gold", "Salt", "Slaves", "All of the above"], correctIndex: 3, image: 'assets/images/C3-Q5.jpg' },
    { question: "Who led the British forces during the 1897 expedition in Benin?", answers: ["Sir James Robertson", "Hugh Clifford", "Sir Frederick Lugard", "Admiral Sir Harry Rawson"], correctIndex: 3, image: 'assets/images/C3-Q6.jpg' },
    { question: "Who was the first woman elected to the Nigerian Senate?", answers: ["Margaret Ekpo", "Franca Afegbua", "Oluremi Tinubu", "Kofoworola Bucknor-A."], correctIndex: 1, image: 'assets/images/C3-Q7.jpg' },
    { question: "Which colonial power ruled Nigeria before independence?", answers: ["France", "Spain", "Britain", "Portugal"], correctIndex: 2, image: 'assets/images/C3-Q8.jpg' },
    { question: "Which Nigerian queen is known as the “Warrior Queen”?", answers: ["Queen Amina", "Queen Moremi", "Queen Nzinga", "Queen Idia"], correctIndex: 0, image: 'assets/images/C3-Q9.jpg' },
    { question: "What year did the amalgamation of the Northern and Southern protectorates to form Nigeria occur?", answers: ["1901", "1914", "1922", "1945"], correctIndex: 1, image: 'assets/images/C3-Q10.jpg' }
];

export const musicQuestions = [
    { question: "Which Nigerian musician is known as the pioneer of Afrobeat?", answers: ["Fela Kuti", "King Sunny Adé", "Burna Boy", "Wizkid"], correctIndex: 0, image: 'assets/images/C4-Q1.jpg' },
    { question: "What was the name of the first Nigerian song to go viral globally on the TikTok platform?", answers: ["Nobody - DJ Neptune", "Way Too Big - Burna Boy", "Love Nwantiti - CKay", "Ginger Me - Rema"], correctIndex: 2, image: 'assets/images/C4-Q2.jpg' },
    { question: "Which Nigerian singer is famous for the song 'African Queen'?", answers: [ "Davido", "2Baba (2Face Idibia)", "Wizkid", "Burna Boy"], correctIndex: 1, image: 'assets/images/C4-Q3.jpg' },
    { question: "Which musical instrument is central to traditional Hausa music in Nigeria?", answers: ["Guitar", "Talking drum", "Kora", "Goge"], correctIndex: 3, image: 'assets/images/C4-Q4.jpg' },
    { question: "What music genre did Nigerian singer Burna Boy popularize internationally?", answers: ["Afrobeats", "Afrofusion", "Afropop", "Reggae"], correctIndex: 1, image: 'assets/images/C4-Q5.jpg' },
    { question: "Who is known as the 'Queen of Waka Music' in Nigeria?", answers: ["Tiwa Savage", "Yemi Alade", "Salawa Abeni", "Onyeka Onwenu"], correctIndex: 2, image: 'assets/images/C4-Q6.jpg' },
    { question: "Which Nigerian artist won a Grammy Award for Best Global Music Album in 2022?", answers: ["Wizkid", "Burna Boy", "Davido", "Femi Kuti"], correctIndex: 0, image: 'assets/images/C4-Q7.jpg' },
    { question: "Which musical award in Nigeria is considered the equivalent of the American Grammy Awards?", answers: ["NEA Awards", "AFRIMA", "Soundcity MVP Awards", "The Headies"], correctIndex: 3, image: 'assets/images/C4-Q8.jpg' },
    { question: "Who is the Nigerian musician behind the viral 'Don't Rush' challenge?", answers: ["Davido & Chris Brown", "Young T & Bugsey", "Adekunle Gold & Simi", "Wizkid & Tems"], correctIndex: 1, image: 'assets/images/C4-Q9.jpg' },
    { question: "Which Nigerian music video became the first to reach 100 million views on YouTube?", answers: ["Fall - Davido", "Fever - Wizkid", "If - Davido", "Come Closer - Wizkid"], correctIndex: 0, image: 'assets/images/C4-Q10.jpg' }
];

export const cultureQuestions = [
    { question: "What is the traditional material worn by women in Nigeria called?", answers: ["Gele", "Iro", "Buba", "Ankara"], correctIndex: 3, image: 'assets/images/C5-Q1.jpg' },
    { question: "Which festival is celebrated by the Yoruba people to honor the goddess of the river, Oshun?", answers: ["Eyo Festival", "Argungu Fishing Fest.", "Osun-Osogbo Festival", "Durbar Festival"], correctIndex: 2, image: 'assets/images/C5-Q2.jpg' },
    { question: "What is the major traditional dance and festival of the Igbo people of Eastern Nigeria?", answers: ["New Yam Festival", "Durbar Festival", "Argungu Fishing Fest.", "Calabar Carnival"], correctIndex: 0, image: 'assets/images/C5-Q3.jpg' },
    { question: "In Nigerian culture, which food is considered a staple across the country?", answers: ["Pounded Yam", "Rice", "Garri", "Fufu"], correctIndex: 1, image: 'assets/images/C5-Q4.jpg' },
    { question: "Which Nigerian tribe is known for their elaborate facial tattoos and scarification?", answers: ["Igbo", "Hausa", "Fulani", "Yoruba"], correctIndex: 3, image: 'assets/images/C5-Q5.jpg' },
    { question: "A traditional Nigerian architecture style characterized by its mud walls and thatch roofs?", answers: ["Aso Oke", "Ndebele", "Sukur", "Zaria"], correctIndex: 2, image: 'assets/images/C5-Q6.jpg' },
    { question: "Which traditional Nigerian event is celebrated with horse parades, royalty and ornate regalia?", answers: ["Durbar Festival", "Sango Festival", "Olojo Festival", "Calabar Carnival"], correctIndex: 0, image: 'assets/images/C5-Q7.jpg' },
    { question: "What major Nigerian city is known for its leather and dye pits?", answers: ["Oyo", "Abuja", "Kano", "Kaduna"], correctIndex: 2, image: 'assets/images/C5-Q8.jpg' },
    { question: "Which festival is known for its dramatic boat regatta and aquatic splendor in Nigeria?", answers: ["Lagos Boat Festival", "Argungu Fishing Fest.", "Calabar Carnival", "Warri Festival"], correctIndex: 1, image: 'assets/images/C5-Q9.jpg' },
    { question: "Which traditional ruler's title translates to 'king' in the Yoruba language?", answers: ["Obi", "Emir", "Igwe", "Oba"], correctIndex: 3, image: 'assets/images/C5-Q10.jpg' }
];




