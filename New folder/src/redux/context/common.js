import { createContext } from "react";


const initialState = {
  // when in dev, change appURL to local url
  appURL: "http://localhost:3000",
  // when in production, change appURL to real url
  // appURL: 'https://amplichat.com',
  googleLink: "https://accounts.google.com",
  linkedinLink: "https://linkedin.com",
  appName: "Developing",

  coverTitle: "Welcome to our Paradise of sponsorships",
  coverText:
    "Here you can meet creators or just create your own business and meet our brands.",
  appleStoreLink: "https://apps.apple.com/us/app/amplichat/id1499570373",
  googlePlayLink: "https://apps.apple.com/us/app/amplichat/id1499570373",


  endorsementTitle: `Hangout with your favorite people on your favorite apps`,
  endorsementText: `AmpliChat powers conversations within DreamHub, VoiceQnA, VoiceMirror, BaZiPaiPai, and SpindriftHome.`,
  endorsementList: [
    {
      title: `DreamHub: Visualized Stories`,
      titleColor: `orangeRed`,
      URL: `https://dreamhub.app`,
    },
    {
      title: `VoiceQnA: Speak a New Language`,
      titleColor: `forestGreen`,
      URL: `https://voiceqna.com`,
    },
    {
      title: `VoiceMirror: Travel Translator`,
      titleColor: `blue`,
      URL: `https://voiceqna.com/mirror`,
    },
    {
      title: `BaZiPaiPai: Know Your Destiny`,
      titleColor: `black`,
      URL: `https://bazipaipai.com`,
    },
    {
      title: `SpindriftHome: HOA Management`,
      titleColor: `orangeRed`,
      URL: `https://spindrifthome.com`,
    },
  ],

  sectionList: [
    {
      title: `Event Networking Made Easy`,
      text: `Tired of shouting over the music to talk to your friends at concerts and events? Our app makes it easy to chat with others in real-time, so you can enjoy the experience without missing out on socializing.`,
    },
    {
      title: `Expand Your Event Community`,
      text: `Meet like-minded people and share your excitement for the latest events and concerts.`,
    },
    {
      title: `Enhance Event Experience`,
      text: `Get instant access to a community of passionate event and concert-goers with our app! Chat with others before, during, and after the event to enhance your experience and create memories that last a lifetime.`,
    },
    {
      title: `Chat with Attendees`,
      text: `Don't let social anxiety get in the way of enjoying your favorite events and concerts! With our app, you can chat with others and make new friends in a safe, welcoming environment.`,
    },
    {
      title: `Discover New Events and Friends`,
      text: `Our app is the perfect way to enhance your experience at events and concerts! Connect with others, share your thoughts and opinions, and discover new artists and events to love.`,
    },
    {
      title: `Connect with Concert Fans`,
      text: `Whether you're a seasoned concert-goer or a first-time attendee, our app is the perfect way to connect with others and make the most of your experience. Download now and start chatting!`,
    },
  ],

  discordLink: "https://discord.com/invite/aFQPYyAVDq",
};

const initialContext = {
  state: initialState,
  dispatch: () => null,
};

export default createContext(initialContext);
