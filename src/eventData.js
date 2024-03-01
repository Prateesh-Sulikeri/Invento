import nukkad_natak from "../public/images/nukkad_natak.png"
import drax_tattoo from "../public/images/drax_tattoo.jpg"
import solo_act from "../public/images/solo_act.png"
import wec from "../public/images/wec.png"
import hr from "../public/images/HR_Events.png"
import mock from "../public/images/mock.png"
import debate from "../public/images/debate.png"
import title from "../public/images/title.png"
import mrinvento from "../public/images/mrinvento.png"
import fitness from "../public/images/fitness.jpg"
import sports from "../public/images/sports.png"
import foosball from "../public/images/foosball.png"
import art from "../public/images/art.png"
import lit from "../public/images/lit.png"
import quiz from "../public/images/quiz.jpg"
import quiz2 from "../public/images/quiz2.png"
import poetry from "../public/images/poetry.png"
import solo from "../public/images/solo.jpg"
import shipwreck from "../public/images/shipwreck.png"
import melodia_events from "../public/images/melodia_events.png"
import solo_singing from "../public/images/solo-singing.png"
import solo_singin from "../public/images/solo-singin.png"
import classical from "../public/images/classical.png"
import solo_inst from "../public/images/solo-inst.png"
import solo_inst2 from "../public/images/solo-inst2.png"
import symph from "../public/images/symph.jpg"
import media_events from "../public/images/media_events.png"
import short_film from "../public/images/short_film.jpg"
import photography from "../public/images/photography.jpg"
import editing from "../public/images/editing.jpg"
import cdc_events from "../public/images/cdc_events.png"
import takeshi from "../public/images/takeshi.png"
import val from "../public/images/val.jpg"
import bgmi from "../public/images/bgmi.jpg"
import mask_events from "../public/images/mask_events.png"
import showdown from "../public/images/showdown.jpg"
import solo_classical from "../public/images/solo_classical.png"
import duet from "../public/images/duet.png"
import group_dance from "../public/images/group_dance.png"
import Performing_arts from "../public/images/Performing_arts.png"
import fashion_events from "../public/images/fashion_events.png"
import tech_events from "../public/images/tech_events.png"
import sports2 from "../public/images/sports2.png"
import finearts1 from "../public/images/finearts1.png"
import finearts2 from "../public/images/finearts2.png"
import finearts3 from "../public/images/finearts3.jpg"
import finearts4 from "../public/images/finearts4.png"
import finearts5 from "../public/images/finearts5.png"

const eventsByType = {
  "Title Events": {
    image: title,
    tag: ["All"],
    events: [
      {
        name: "Mr and Miss Invento",
        image: mrinvento,
        description: "Only the worthy, the bold, and the brilliant shall claim the mantles of Master and Miss. Prepare to face trials that test your mettle, unravel riddles that challenge your mind, and emerge as heroes worthy of legend. Do you dare answer the call?    ",
        registrationLink: "https://forms.gle/4v9q2gWq7Jmm9fWc9",
      },
      {
        name: "Superhero Showdown (Mr and Miss Fitness)",
        image: fitness,
        description: "Teams of participent battle through epic rounds of challenges, testing their strength, wit, and determination. Only the boldest will claim victory and rise as the legendary champions of fitness!",
        registrationLink: "https://forms.gle/jU2aJDK38f2SHh8R8",
      },
    ],
  },
  "HR Events": {
    image: hr,
    tag: ["All"],
    events: [
      {
        name: "The sokovia accords (debate)",
        image: debate,
        description: "In the arena of intellect and persuasion, where words wield power and ideas collide, prepare to challenge, defend, and captivate as you navigate the realms of debate. Let your voices ring loud and your arguments resonate – for here, minds are sharpened, and perspectives shifted.        ",
        registrationLink: "https://forms.gle/PpMxhUWZrLduPzAv5",
      },
      {
        name: "The daily bugle face-off (mock-press)",
        image: mock,
        description: "Have you ever pondered what it's like to dodge paparazzi flashbulbs, ducking and diving through the limelight as a Hollywood star, a political juggernaut, or a sports sensation? Well, prepare to slip into these larger-than-life personas with a comical twist in this extravaganza! But beware, as you'll soon find yourself in the hot seat, fielding absurd questions from the relentless press corps. Are you up for the challenge, ready to turn the tables and steal the show? ",
        registrationLink: "https://forms.gle/yGydJ36sQDFtVdEY7",
      },
    ],
  },
  "women empowerment Club Events": {
    image: wec,
    tag: ["All"],
    events: [
      {
        name: "Voice the change (nukkad natak)",
        image: nukkad_natak,
        description: "Hello drama folks, join us to convert the enthusiasm of acting into actions louder and voices echo with purpose! You also have the unique opportunity to harness the power of theatre for social change. So here's your time to give an electrifying showcase to redefine the boundaries of storytelling beyond just words and thoughts.",
        registrationLink: "https://forms.gle/AFY7aYzfZ3B6U1iF9",
      },
      {
        name: "Drax’s tattoo studio (tattoo designing)",
        image: drax_tattoo,
        description: "Unleash your creativity, from intricate patterns to bold designs, let your imagination run wild and leave your mark to highlight the true essence of artistic expression. . Whether you're a seasoned artist or a novice enthusiast, we welcome all to express themselves through the power of their designs, art and attractive colours.",
        registrationLink: "https://forms.gle/CTYA7tH182LscWXNA",
      },
      {
        name: "Solo spotlight (mono-act)",
        image: solo_act,
        description: " Come over to captivate the audience through your solo performances, demonstrating your acting prowess, versatility, and storytelling skills. This event often serves as a platform for you drama enthusiasts to express your creativity and showcase your talent in dramatic arts. ",
        registrationLink: "https://forms.gle/9Z69NcWjaPacYsmv6",
      },
    ],
  },
  "Sports Club Events": {
    image: sports,
    tag: ["All"],
    events: [
      {
        name: "Super foosball league : heroes vs villains",
        image: foosball,
        description: "Welcome to the Super Foosball League: Heroes vs. Villains! Teams from every college clash in a battle of strategy and skill. With rules as tight as a superhero's spandex, players must navigate the field, scoring goals while avoiding penalties. Get ready for action-packed matches where every move could mean victory or defeat!",
        registrationLink: "https://forms.gle/BPz7jCJy8T3xsKHB8",
      },
    ],
  },
  "Finearts Events": {
    image: art,
    tag: ["All", "Cultural + fun"],
    events: [
      {
        name: "Canvas crusade",
        image: finearts1,
        description: "Imagine stepping into the vivid palette of Claude Monet, the master of Impressionism. Your mission: infuse Monet's dreamy landscapes with the action-packed spirit of comics. Picture Spider-Man swinging through water lilies or Wonder Woman facing off against vibrant sunflowers. Embark on a creative quest in Canvas Crusade, a painting competition where the canvas becomes your battleground for artistic supremacy! Get ready to redefine the boundaries of creativity.",
        registrationLink: "https://forms.gle/ttEvnjhqdaWUfrBa8",
      },
      {
        name: "Comic kaleidoscope",
        image: finearts2,
        description: "Welcome to Comic Kaleidoscope; Crafting Characters, Weaving Worlds, where the realms of imagination and storytelling collide! This extraordinary event unfolds in two captivating rounds, inviting you to shape characters and narratives that will dance off the pages of your very own comic universe.",
        registrationLink: "https://forms.gle/MSy1bo6KXYnWwhqSA",
      },
      {
        name: "Trash bin bonanza!",
        image: finearts3,
        description: "Join us in a celebration of creativity and sustainability at Trash Bin Bonanza, where discarded items get a second chance to shine! Unleash your resourcefulness in this unique event that challenges you to turn trash into treasures, giving a new life and purpose to the overlooked.",
        registrationLink: "https://forms.gle/94MUVb1JUb85c1xQ7",
      },
      {
        name: "Super Suit showoff (solo-fashion)",
        image: finearts4,
        description: "Step into the limelight and let your unique style steal the show at the Vogue Vanguard Solo Fashion Extravaganza. This exclusive event calls upon participants to ignite their creativity and celebrate individuality through the art of fashion.",
        registrationLink: "https://forms.gle/WSpQqpMxJ3UhCqHU7",
      },
      {
        name: "Avenger’s Ensemble (group fashion)",
        image: finearts5,
        description: "Hey fashionistas! It's time to unleash the collective style storm and showcase your group's epic fashion saga. Can you turn up the chic-o-meter and bring the laughs? We want to see how well you can slay the runway as a dynamic squad. Strut, pose, and sprinkle in some comical flair – after all, fashion is about having fun too! Gather your glam gang and get ready. This is not just a runway, it's your comedy and couture extravaganza!",
        registrationLink: "https://forms.gle/E7LmnCd9rvAj8rXv6",
      },
    ],
  },
  "Literary Club Events": {
    image: lit,
    tag: ["All", "Technical"],
    events: [
      {
        name: "Trials of lore (mythical quiz)",
        image: quiz,
        description: "Step into the realm of legends and lore with our odyssey! Unravel the mysteries of ancient civilizations, traverse through mythical landscapes, and test your knowledge of gods, monsters, and heroes. Embark on an epic journey of discovery and challenge your friends to see who reigns supreme in the realm of myths and legends!",
        registrationLink: "https://forms.gle/fZXkz5LoTyeAp2zY7",
      },
      {
        name: "Riddler’s Questionnaire (thematic quiz)",
        image: quiz2,
        description: "Dive into a world of vibrant characters, thrilling adventures, and epic battles with Riddler’s Questionnaire ! Test your knowledge of iconic series, legendary heroes, and unforgettable storylines. Whether you're a seasoned otaku or just starting your journey, this quiz is your chance to prove your fandom prowess and connect with fellow enthusiasts.",
        registrationLink: "https://forms.gle/1p4hS4gTswfheQiV7",
      },
      {
        name: "Linguistic lyricism (poetry)",
        image: poetry,
        description: "The event is about presenting the spoken word. Blank verses or meters, first love or breakup poems, humorous poems or melancholic ones, we are on the lookout for all styles of poetry.",
        registrationLink: "https://forms.gle/7gDKe7KQJ1KQukGVA",
      },
      {
        name: "Solo levelling",
        image: solo,
        description: "Get ready for 'Solo Levelling' - an epic challenge for lone warriors! With three rounds of mind-bending trials, contestants must outwit and outpace their rivals to claim victory. From solving puzzles to decoding secret words and mastering rapid-fire reading, only the bravest and quickest will ascend to greatness. Are you ready to rise above the rest and become the solo champion?",
        registrationLink: "https://forms.gle/giJQDqiTW3naCkZd8",
      },
      {
        name: "Legendary survival (shipwreck)",
        image: shipwreck,
        description: "Get ready for 'Solo Levelling' - an epic challenge for lone warriors! With three rounds of mind-bending trials, contestants must outwit and outpace their rivals to claim victory. From solving puzzles to decoding secret words and mastering rapid-fire reading, only the bravest and quickest will ascend to greatness. Are you ready to rise above the rest and become the solo champion?",
        registrationLink: "https://forms.gle/eykdVyiieboD7ChD8",
      },
    ],
  },
  "Melodia Events": {
    image: melodia_events,
    tag: ["All", "Cultural + fun"],
    events: [
      {
        name: "Cosmic composition (solo-eastern)",
        image: solo_singing,
        description: "Once music touches you, it never leaves. Some of them ring in your dreams. Every year, Melodia gives such an opportunity to talented musicians to drive us into a musical trance through this specially curated event for the Eastern music.",
        registrationLink: "https://forms.gle/oVfJm4xK5AsD2FBx7",
      },
      {
        name: "Cosmic composition (solo-western)",
        image: solo_singin,
        description: "Find yourself in the alluring and enticing nautical world and get a chance to personify grace and melody. Here is your ticket to mesmerise and captivate your audience in the best possible way. Join us as we take our charge over the West!",
        registrationLink: "https://forms.gle/bb5FFJGTcKeC1kfu8",
      },
      {
        name: "Celestial swaras (solo-classical)",
        image: classical,
        description: "Over the years, we have witnessed talented classical singers enthrall us with their soulful performances. Following the tradition, here's an opportunity to showcase your talents with our perfectly tailored rounds for classical music.",
        registrationLink: "https://forms.gle/KyWQeM6McpNf8zHX6",
      },
      {
        name: "Amusing arpeggios : Beats (solo-instrumental-percussion)",
        image: solo_inst,
        description: "Be it Mozart or Myles Kennedy, we invite masters of all instruments to showcase your finest arpeggios.",
        registrationLink: "https://forms.gle/pGiV39dXS3M9LPHHA",
      },
      {
        name: " Amusing arpeggios : Strings (solo-instrumental-non percussion)",
        image: solo_inst2,
        description: "Be it Mozart or Myles Kennedy, we invite masters of all instruments to showcase your finest arpeggios.",
        registrationLink: "https://forms.gle/aRWtzpKzdpvm9oS39",
      },
      {
        name: "Symphonica (unplugged)",
        image: symph,
        description: "Who doesn't love a nice evening of music and amazing ambience? Here's a stage for all the musicians out there to present their amalgamations. Though dreamy, this fierce competition is here to bring forward the best of acoustic music.",
        registrationLink: "https://forms.gle/KpmFmvNgzizPbhky9",
      },
    ],
  },
  "Media Events": {
    image: media_events,
    tag: ["All"],
    events: [
      {
        name: "Comic cinquest (short-film)",
        image: short_film,
        description: "Step into the vibrant and dynamic world of Comic CineQuest a short film event that celebrates the magic of comic book storytelling like never before. This immersive experience invites audiences on a thrilling journey through the captivating realms of ink and imagination, bringing iconic characters and gripping narratives to life on the big screen.",
        registrationLink: "https://forms.gle/dwjRi2XrNUqDx6eu8",
      },
      {
        name: "Vision viesta  (photography)",
        image: photography,
        description: "Step into a world where imagination meets reality at INVENTO 2024 ; an exhilarating photography event that brings the vibrant and dynamic universe of comics to life through the lens of talented photographers. This one-of-a-kind gathering invites participants to explore and celebrate the rich tapestry of characters, stories, and creativity that have defined the comic book realm.",
        registrationLink: "https://forms.gle/3kFo9djivLSqvrFE6",
      },
      {
        name: "Zoom & Zap: Editing Extravaganza (photo editing)",
        image: editing,
        description: "Transform your ordinary photos into extraordinary visuals. Use your editing skills to create dynamic and eye-catching panoramic panels that tell a captivating story.",
        registrationLink: "https://forms.gle/7hzHZ8RiAzpLZU9A6",
      },
    ],
  },
  "CDC Club Events": {
    image: cdc_events,
    tag: ["All"],
    events: [
      {
        name: "Takeshi’s castle",
        image: takeshi,
        description: "Prepare for the ultimate adventure at Takeshi's Castle! Teams of 5 brave souls will battle through 5 epic rounds of challenges at the Portico venue. With elimination looming at every turn, contestants must rely on their wits and teamwork to survive. But beware: mobile phones are off-limits, and only the boldest teams with at least 2 boys or 2 girls will emerge victorious. Will you conquer Takeshi's Castle and claim glory? Join the quest to find out!",
        registrationLink: "https://forms.gle/iw7VyP5ACu6BaavG7",
      },
      {
        name: "Valorant",
        image: val,
        description: "Step into the world of Valorant, where heroes clash in a battle of strategy and skill! Assemble your team of agents, each with their own unique powers, and prepare for heart-pounding action. In this epic comic event, teams will face off in intense matches filled with tactical maneuvers, daring rescues, and explosive showdowns. Will your squad emerge victorious and claim glory on the battlefield? Join the fray and find out!",
        registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSe0S_XtwM3NjOL1Xiietr1v6G1tLhDvxOL6qZ0JIB4mtY74-w/viewform?usp=sf_link",
      },
      {
        name: "Battlegrounds mobile india (BGMI)",
        image: bgmi,
        description: "Prepare for an immersive dive into the high- tech warfields of BGMI, where cutting-edge technology meets multiplayer action. Gear up for an event like no other, as we combine the adrenaline-pumping gameplay of BGMI with futuristic elements that will blow your mind!",
        registrationLink: "https://forms.gle/8vCP7FiUSCaKgUaAA",
      },
    ],
  },
  "Mask Club Events": {
    image: mask_events,
    tag: ["All", "Cultural + fun"],
    events: [
      {
        name: " Celestial face-off (showdown)",
        image: showdown,
        description: "Dance is a superpower that everybody has, but it is only a few who choose to unleash it into the world. Be it Bollywood thumkas, hip hop , colourful costumes or contemporary  footwork , it all looks like illusion come true when performed. This very magic is what we look forward to! ",
        registrationLink: "https://forms.gle/zYfg8KbKacbLskJz9",
      },
      {
        name: "Classical clash (solo-classical)",
        image: solo_classical,
        description: "Classical dance is a highly disciplined art form that has its roots in ancient cultures. It is characterized by precise and graceful movements that are performed to classical music.",
        registrationLink: "https://forms.gle/LWW7T1R8PzcC1thZ7",
      },
      {
        name: "Fantastic two (duet dance)",
        image: duet,
        description: "A dancer need not do intricate fancy steps, all you must do is adapt to the rhythm and enjoy the music as it is!  And when you have a partner, it's just a cherry on top isn't it?",
        registrationLink: "https://forms.gle/zAxJBESzY6q1Eop76",
      },
      {
        name: "Dance of titans (group dance)",
        image: group_dance,
        description: 'Your Fictional world may not live up to your expectations to showcase your moves and grooves. But dont worry, heres a platform to “Do it big, do it right and do it with style". Let your group captivate the Floor with energy, expression, and dance!',
        registrationLink: "https://forms.gle/WFxYMZ5TjqQd63ER9",
      },
    ],
  },
  "Performing Arts": {
    image: Performing_arts,
    tag: ["All", "Cultural + fun"],
    events: [
      {
        name: "Voice the change (nukkad natak)",
        image: nukkad_natak,
        description: "Hello drama folks, join us to convert the enthusiasm of acting into actions louder and voices echo with purpose! You also have the unique opportunity to harness the power of theatre for social change. So here's your time to give an electrifying showcase to redefine the boundaries of storytelling beyond just words and thoughts.",
        registrationLink: "https://forms.gle/AFY7aYzfZ3B6U1iF9",
      },
      {
        name: " Celestial face-off (showdown)",
        image: showdown,
        description: "Dance is a superpower that everybody has, but it is only a few who choose to unleash it into the world. Be it Bollywood thumkas, hip hop , colourful costumes or contemporary  footwork , it all looks like illusion come true when performed. This very magic is what we look forward to! ",
        registrationLink: "https://forms.gle/zYfg8KbKacbLskJz9",
      },
      {
        name: "Classical clash (solo-classical)",
        image: solo_classical,
        description: "Classical dance is a highly disciplined art form that has its roots in ancient cultures. It is characterized by precise and graceful movements that are performed to classical music.",
        registrationLink: "https://forms.gle/LWW7T1R8PzcC1thZ7",
      },
      {
        name: "Fantastic two (duet dance)",
        image: duet,
        description: "A dancer need not do intricate fancy steps, all you must do is adapt to the rhythm and enjoy the music as it is!  And when you have a partner, it's just a cherry on top isn't it?",
        registrationLink: "https://forms.gle/zAxJBESzY6q1Eop76",
      },
      {
        name: "Dance of titans (group dance)",
        image: group_dance,
        description: 'Your Fictional world may not live up to your expectations to showcase your moves and grooves. But dont worry, heres a platform to “Do it big, do it right and do it with style". Let your group captivate the Floor with energy, expression, and dance!',
        registrationLink: "https://forms.gle/WFxYMZ5TjqQd63ER9",
      },
      {
        name: "Cosmic composition (solo-eastern)",
        image: solo_singing,
        description: "Once music touches you, it never leaves. Some of them ring in your dreams. Every year, Melodia gives such an opportunity to talented musicians to drive us into a musical trance through this specially curated event for the Eastern music.",
        registrationLink: "https://forms.gle/oVfJm4xK5AsD2FBx7",
      },
      {
        name: "Cosmic composition (solo-western)",
        image: solo_singin,
        description: "Find yourself in the alluring and enticing nautical world and get a chance to personify grace and melody. Here is your ticket to mesmerise and captivate your audience in the best possible way. Join us as we take our charge over the West!",
        registrationLink: "https://forms.gle/bb5FFJGTcKeC1kfu8",
      },
      {
        name: "Celestial swaras (solo-classical)",
        image: classical,
        description: "Over the years, we have witnessed talented classical singers enthrall us with their soulful performances. Following the tradition, here's an opportunity to showcase your talents with our perfectly tailored rounds for classical music.",
        registrationLink: "https://forms.gle/KyWQeM6McpNf8zHX6",
      },
      {
        name: "Amusing arpeggios : Beats (solo-instrumental-percussion)",
        image: solo_inst,
        description: "Be it Mozart or Myles Kennedy, we invite masters of all instruments to showcase your finest arpeggios.",
        registrationLink: "https://forms.gle/pGiV39dXS3M9LPHHA",
      },
      {
        name: " Amusing arpeggios : Strings (solo-instrumental-non percussion)",
        image: solo_inst2,
        description: "Be it Mozart or Myles Kennedy, we invite masters of all instruments to showcase your finest arpeggios.",
        registrationLink: "https://forms.gle/aRWtzpKzdpvm9oS39",
      },
      {
        name: "Symphonica (unplugged)",
        image: symph,
        description: "Who doesn't love a nice evening of music and amazing ambience? Here's a stage for all the musicians out there to present their amalgamations. Though dreamy, this fierce competition is here to bring forward the best of acoustic music.",
        registrationLink: "https://forms.gle/KpmFmvNgzizPbhky9",
      },
    ],
  },
  "Technical Events": {
    image: tech_events,
    tag: ["All", "Technical"],
    events: [
      {
        name: "Trials of lore (mythical quiz)",
        image: quiz,
        description: "Step into the realm of legends and lore with our odyssey! Unravel the mysteries of ancient civilizations, traverse through mythical landscapes, and test your knowledge of gods, monsters, and heroes. Embark on an epic journey of discovery and challenge your friends to see who reigns supreme in the realm of myths and legends!",
        registrationLink: "https://forms.gle/fZXkz5LoTyeAp2zY7",
      },
      {
        name: "Riddler’s Questionnaire (thematic quiz)",
        image: quiz2,
        description: "Dive into a world of vibrant characters, thrilling adventures, and epic battles with Riddler’s Questionnaire ! Test your knowledge of iconic series, legendary heroes, and unforgettable storylines. Whether you're a seasoned otaku or just starting your journey, this quiz is your chance to prove your fandom prowess and connect with fellow enthusiasts.",
        registrationLink: "https://forms.gle/1p4hS4gTswfheQiV7",
      },
      {
        name: "The sokovia accords (debate)",
        image: debate,
        description: "In the arena of intellect and persuasion, where words wield power and ideas collide, prepare to challenge, defend, and captivate as you navigate the realms of debate. Let your voices ring loud and your arguments resonate – for here, minds are sharpened, and perspectives shifted.        ",
        registrationLink: "https://forms.gle/PpMxhUWZrLduPzAv5",
      },
      {
        name: "The daily bugle face-off (mock-press)",
        image: mock,
        description: "Have you ever pondered what it's like to dodge paparazzi flashbulbs, ducking and diving through the limelight as a Hollywood star, a political juggernaut, or a sports sensation? Well, prepare to slip into these larger-than-life personas with a comical twist in this extravaganza! But beware, as you'll soon find yourself in the hot seat, fielding absurd questions from the relentless press corps. Are you up for the challenge, ready to turn the tables and steal the show? ",
        registrationLink: "https://forms.gle/yGydJ36sQDFtVdEY7",
      },
    ],
  },
  "Fashion Events": {
    image: fashion_events,
    tag: ["All", "Cultural + fun"],
    events: [
      {
        name: "Super Suit showoff (solo-fashion)",
        image: "",
        description: "",
        registrationLink: "https://forms.gle/WSpQqpMxJ3UhCqHU7",
      },
      {
        name: "Avenger’s Ensemble (group fashion)",
        image: "",
        description: "",
        registrationLink: "https://forms.gle/E7LmnCd9rvAj8rXv6",
      },
    ],
  },
  "Sports and eSports": {
    image: sports2,
    tag: ["All", "Cultural + fun"],
    events: [
      {
        name: "Takeshi’s castle",
        image: takeshi,
        description: "Prepare for the ultimate adventure at Takeshi's Castle! Teams of 5 brave souls will battle through 5 epic rounds of challenges at the Portico venue. With elimination looming at every turn, contestants must rely on their wits and teamwork to survive. But beware: mobile phones are off-limits, and only the boldest teams with at least 2 boys or 2 girls will emerge victorious. Will you conquer Takeshi's Castle and claim glory? Join the quest to find out!",
        registrationLink: "https://forms.gle/iw7VyP5ACu6BaavG7",
      },
      {
        name: "Valorant",
        image: val,
        description: "Step into the world of Valorant, where heroes clash in a battle of strategy and skill! Assemble your team of agents, each with their own unique powers, and prepare for heart-pounding action. In this epic comic event, teams will face off in intense matches filled with tactical maneuvers, daring rescues, and explosive showdowns. Will your squad emerge victorious and claim glory on the battlefield? Join the fray and find out!",
        registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSe0S_XtwM3NjOL1Xiietr1v6G1tLhDvxOL6qZ0JIB4mtY74-w/viewform?usp=sf_link",
      },
      {
        name: "Battlegrounds mobile india (BGMI)",
        image: bgmi,
        description: "Prepare for an immersive dive into the high- tech warfields of BGMI, where cutting-edge technology meets multiplayer action. Gear up for an event like no other, as we combine the adrenaline-pumping gameplay of BGMI with futuristic elements that will blow your mind!",
        registrationLink: "https://forms.gle/8vCP7FiUSCaKgUaAA",
      },
    ],
  },
};

export default eventsByType;
