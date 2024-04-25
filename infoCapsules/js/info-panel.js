/* global AFRAME */
AFRAME.registerComponent('info-panel', {
  init: function () {
    var buttonEls = document.querySelectorAll('.menu-button');
    var fadeBackgroundEl = this.fadeBackgroundEl = document.querySelector('#fadeBackground');

    this.CategoryTitleEl = document.querySelector('#Category');
    this.categoryDescriptionEl = document.querySelector('#categoryDescription');

    this.infoCapsules = {
      factsButton: {
        title: 'Some Fun Facts about Nigeria',
        imgEl: document.querySelector('#factsImage'),
        description: `Discover the lesser-known gems of Nigeria with a collection of delightful fun facts that celebrate the nation's uniqueness.\n
        1. Nigeria's Languages: Nigeria has over 500 indigenous languages, making it one of the most linguistically diverse countries in the world.\n
        2. Nollywood's Prowess: Nollywood, Nigeria's film industry, is the second largest in the world by volume, producing thousands of films each year.\n
        3. The Giant of Africa: Not only is Nigeria referred to as the "Giant of Africa" due to having the largest population and economy, but it also has the largest diversity of butterfly species in the world.\n
        4. Medical Innovations: Nigeria was the first country in the world to successfully carry out a separation of conjoined twins in 1974.\n
        5. Cultural Fashion: Nigerian fashion is a vibrant part of its culture, with traditional garments (Ankara) and styles making waves in international fashion scenes.\n
        6. First TV Station in Africa: Nigeria established the first television station in Africa in 1959. `
      },
      foodButton: {
        title: 'Some Nigerian Cuisines',
        imgEl: document.querySelector('#foodImage'),
        description: `Nigerian cuisine is a rich amalgamation of flavors influenced by various ethnic groups. Common ingredients include chili peppers, palm oil, and local vegetables, forming a palette of dishes that are hearty and spicy.\n
        1. Jollof Rice: A celebratory dish often served at weddings and parties.\n
        2. Pepper Soup: A spicy broth made with meat or fish, scented with local spices and herbs.\n
        3. Pounded Yam and Egusi Soup: A staple in the diet of many Nigerians, especially in the southern regions.\n
        4. Suya: From Hausa culture, a traditional smoked spiced meat skewer often beef or chicken, marinated in a mixture of ground peanuts and spices. \n
        5. Akara (Bean Cakes): Deep-fried bean balls served as breakfast or snacks (no image).\n
        6. Puff Puff: Deep-fried dough balls, fluffy and sweet, commonly enjoyed as a snack or street food.\n
        7. Zobo: A popular drink made from hibiscus leaves, often spiced with ginger and sweetened with fruit flavors.`
      },
      
      cultureButton: {
        title: 'Some Facts on Nigerian Cultures ',
        imgEl: document.querySelector('#cultureImage'),
        description: `Nigeria has a rich cultural diversity across various ethnic groups with a blend of traditions, languages, and social practices that define this vibrant nation. \n
        1. Multiple Ethnicities: Over 250 ethnic groups, each with unique traditions, languages, art, music, and social practices.\n
        2. Linguistic Wealth: Over 500 distinct languages spoken, the linguistic landscape is incredibly diverse, reflecting a complex tapestry of ethnic communities.\n
        3. Tiv's Kwagh-Hir Theater: Tiv people have a distinctive form of puppet theater known as Kwagh-Hir, which is used to tell stories and convey moral lessons.\n
        4. Iri Ji Ohu (New Yam Festival): This is one of the most important festivals in Igbo culture, celebrating the harvest of the new yam. It involves rituals, feasting, and performances.\n
        5. Hausa Architecture: Hausa cities are renowned for their beautiful traditional architecture, including the ancient city walls and gates of Kano. \n
        6. Talking Drums: Yoruba have a long tradition of using talking drums, to mimic the tonal languages of Yoruba speech, for communication and music.`
      },
      generalButton: {
        title: 'Some General Facts on Nigeria',
        imgEl: document.querySelector('#generalImage'),
        description: `A snapshot of Nigeria's geography, economy, demographics, and milestones, painting a picture of a country rich in natural beauty and resources, bustling with vibrant cities and diverse cultures. \n
        1. Population Mix: With over 200 million people, Nigeria is the most populous country in Africa, showcasing an array of ethnicities, languages, and cultural practices.\n
        2. Religious Diversity: The country is a tapestry of religious beliefs, with Christianity, Islam, and traditional African religions coexisting.\n
        3. Geographical Diversity: Nigeria's landscape ranges from lush rainforests in the south to arid deserts in the north, and fertile plains in between.\n
        4. Natural Resources: Besides oil, Nigeria is rich in natural gas, tin, iron ore, coal, limestone, niobium, lead, zinc, and arable land.\n
        5. Technological Advancements: With a rapidly growing tech sector, Nigeria is at the forefront of innovation in Africa, especially in fintech and telecomms.\n
        6. Sports Fever: Nigeria has a passionate sports culture, excelling in football, basketball, and athletics, with a history of success in international competitions.`
      },
      artButton: {
        title: 'Some Facts on Nigerian Art',
        imgEl: document.querySelector('#artImage'),
        description: `Nigeria's art scene is a vibrant reflection of its historical depth and contemporary dynamism. From ancient artifacts to modern masterpieces. \n
        1. Nok Terracotta: The ancient Nok civilization is known for its terracotta sculptures, some of the earliest forms of fine art in West Africa, dating back to 500 BC.\n
        2. Benin Bronzes: These world-renowned metal plaques and sculptures from the Kingdom of Benin (now Edo State) showcase the high level of craftsmanship in bronze work from the 13th century.\n
        3. Textile Art: Nigerian textiles, such as Aso-Oke, Adire, and Akwete, reflect the country's rich heritage in fabric making, known for their intricate designs and vibrant colors.\n
        4. Leatherwork: The Northern people are renowned for their leather crafting, producing finely decorated items like bags, saddles, and shoes, which are highly valued both within and outside Nigeria.\n
        5. Traditional Crafts: Nigeria's rich tradition of crafts includes pottery, weaving, and woodcarving, with each ethnic group having its unique style and method.\n
        6. Contemporary Painting: Artists like Ben Enwonwu and Peju Alatise contribute to a vibrant art scene.`
      },
      historyButton: {
        title: 'Some Facts on Nigerian History',
        imgEl: document.querySelector('#historyImage'),
        description: `Dive into Nigeria's past, exploring the events, civilizations, and movements that have shaped the nation. \n
        1. Colonial Era and Amalgamation: Nigeria came under British control in the late 19th century, with the southern and northern protectorates amalgamated into a single colony in 1914.\n
        2. Nigerian Independence: Achieved on October 1, 1960, this marked Nigeria's transition from colonial rule to self-governance.\n
        3. Biafran War: From 1967 to 1970, this civil war was a significant conflict following the attempted secession of the southeastern provinces.\n
        4. Military Rule and Democracy: Nigeria experienced multiple military coups and periods of military rule before returning to civilian governance in 1999.\n
        5. Trans-Saharan Trade Routes: For centuries, these routes connected northern Nigerian cities like Kano and Katsina with North Africa, facilitating the exchange of gold, salt, ivory, and knowledge\n
        6. Economic Boom and Oil Discovery: The discovery of oil in the late 1950s transformed Nigeria's economy, leading to rapid economic growth and increased geopolitical significance.`
      },
      musicButton: {
        title: 'Some Facts on Nigerian Music',
        imgEl: document.querySelector('#musicImage'),
        description: `Nigeria's music landscape is as diverse as its cultural heritage, pulsating with rhythms and sounds that range from traditional folk to contemporary genres.  \n
        1. Traditional Folk Music: Rooted in the ceremonies and daily life of Nigeria's ethnic groups, traditional music features instruments like the talking drum, shekere, and flute, embodying the nation's rich cultural diversity. \n
        2. Eyo Festival Music: Accompanying the famous Eyo masquerade festival in Lagos, this music is intrinsic to the cultural display, characterized by its lively beats and festive atmosphere.\n
        3. Arewa Music Scene: Represents the music from the northern part of Nigeria, blending Hausa cultural sounds with modern musical styles, featuring artists like Nura M Inuwa and Ali Jita.\n
        4. Apala and Sakara Music: Traditional genres like Apala and Sakara are deep-rooted in Yoruba culture, known for their percussive beats and philosophical lyrics.\n
        5. Gospel Highlife: A fusion of gospel lyrical content with highlife music rhythms.\n
        6. Contemporary Afrobeats: A global phenomenon, Afrobeats (distinct from Fela's Afrobeat) mixes traditional Nigerian music with global pop, hip-hop, and R&B, popularized by stars like Wizkid, Davido, and Burna Boy.`
      },
      statesButton: {
        title: 'Some Facts on Nigerian States',
        imgEl: document.querySelector('#musicImage'),
        description: `Nigeria's geographical diversity and linguistic heritage, showcasing the unique cultural identity, traditions, and languages of its 36 states and the Federal Capital Territory.\n
        1. Abuja (Federal Capital Territory): Nigeria's capital, known for its modern architecture and diverse cultures, serves as the political and administrative heart of the nation. \n
        2. Lagos State: Nigeria's commercial hub and melting pot of cultures, Lagos is vibrant and cosmopolitan, with a mix of languages and ethnicities thriving in its bustling metropolis.\n
        3. Kano State: A historical center of the Hausa-Fulani culture and Islamic scholarship, Kano's rich heritage is reflected in its ancient architecture, vibrant markets.\n
        4. Delta State: A state with a rich blend of cultures, known for its oil production and diverse ethnic groups like the Urhobo, Isoko, and Itsekiri, each with unique languages and traditions.\n
        5. Port Harcourt (Rivers State): A key player in Nigeria's oil economy, Port Harcourt is a cosmopolitan city with a diverse population.\n
        6. Borno State: Reflecting the legacy of the Kanem-Borno Empire, it is predominantly Kanuri-speaking and has a rich Islamic history and heritage.`
      },
      influenceButton: {
        title: "Some Facts on Nigeria's Global Influence",
        imgEl: document.querySelector('#influenceImage'),
        description: ` The Giant of Africa has extensive impact on the world stage, from its dynamic diaspora and economic ventures to cultural exports and international collaborations.\n
        1. Educational Achievements: Nigeria produces over 500,000 university graduates annually, with many gaining advanced degrees from prestigious institutions worldwide, contributing significantly to the global workforce. \n
        2. Music Milestones: Nigerian artist Wizkid sold out London's O2 Arena in just 12 minutes in 2021, highlighting the international appeal of Nigerian music.\n
        3. Tech Impact: Nigerian entrepreneurs are behind some of Africa’s most successful tech startups, such as Flutterwave and Paystack, attracting significant international investment and expanding operations across continents.\n
        4. Global Sports Events: Nigeria's national football team, the Super Eagles, has qualified for six of the last seven FIFA World Cup tournaments.\n
        5. Nobel Laureate: Wole Soyinka, a Nigerian playwright and poet, was the first African to be awarded the Nobel Prize in Literature in 1986\n
        6. Global Financial Leaders: Dr. Ngozi Okonjo-Iweala, a Nigerian economist and international development expert, became the first woman and the first African to lead the World Trade Organization in 2021.`
      },
    };

    this.onMenuButtonClick = this.onMenuButtonClick.bind(this);
    this.onBackgroundClick = this.onBackgroundClick.bind(this);
    this.backgroundEl = document.querySelector('#background');
    for (var i = 0; i < buttonEls.length; ++i) {
      buttonEls[i].addEventListener('click', this.onMenuButtonClick);
    }
    this.backgroundEl.addEventListener('click', this.onBackgroundClick);
    this.el.object3D.renderOrder = 9999999;
    this.el.object3D.depthTest = false;
    fadeBackgroundEl.object3D.renderOrder = 9;
    fadeBackgroundEl.getObject3D('mesh').material.depthTest = false;
  },

  onMenuButtonClick: function (evt) {
    var infoCapsules = this.infoCapsules[evt.currentTarget.id];

    this.backgroundEl.object3D.scale.set(1, 1, 1);

    this.el.object3D.scale.set(1, 1, 1);
    if (AFRAME.utils.device.isMobile()) { this.el.object3D.scale.set(1.4, 1.4, 1.4); }
    this.el.object3D.visible = true;
    this.fadeBackgroundEl.object3D.visible = true;

    if (this.currentImageEl) { this.currentImageEl.object3D.visible = false; }
    this.currentImageEl = infoCapsules.imgEl;
    this.currentImageEl.object3D.visible = true;

    this.CategoryTitleEl.setAttribute('text', 'value', infoCapsules.title);
    this.categoryDescriptionEl.setAttribute('text', 'value', infoCapsules.description);
  },

  onBackgroundClick: function (evt) {
    this.backgroundEl.object3D.scale.set(0.001, 0.001, 0.001);
    this.el.object3D.scale.set(0.001, 0.001, 0.001);
    this.el.object3D.visible = false;
    this.fadeBackgroundEl.object3D.visible = false;
  }
  
});
