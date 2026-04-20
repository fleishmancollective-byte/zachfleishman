/**
 * Products and their content live here as static data.
 *
 * When you upload each video to Wistia, paste the media ID into the `wistiaId`
 * field. Media IDs are the 10-character strings in Wistia's iframe embed URL:
 *   https://fast.wistia.net/embed/iframe/{MEDIA_ID}
 * Leave blank for unuploaded videos; the modal will show an "Uploading soon"
 * placeholder.
 */

export type Video = {
  id: string;
  num: string;
  title: string;
  duration: string;
  description: string;
  wistiaId?: string;
};

export type Resource = {
  id: string;
  title: string;
  description: string;
  href?: string; // download URL or gated page; leave blank until ready
};

export type Product = {
  id: string;
  name: string;
  tagline: string;
  videos: Video[];
  resources: Resource[];
};

export const products: Product[] = [
  {
    id: "zero-to-six",
    name: "Zero to Six",
    tagline: "A voice note, a playbook, and the room.",
    videos: [
      {
        id: "z2s-00",
        num: "00",
        title: "Before You Press Play",
        duration: "1 min",
        description:
          "A short welcome. What this is, what it isn't, and what I want you to know before the real conversation starts.",
      },
      {
        id: "z2s-01",
        num: "01",
        title: "Where I Am Now",
        duration: "3 min",
        description:
          "The desk, the Tacoma, Idaho, the friends, and the days I still waste. The honest version.",
      },
      {
        id: "z2s-02",
        num: "02",
        title: "Why I Left the Script",
        duration: "3 min",
        description:
          "The path I was supposed to take: cybersecurity, safe, respectable. And the quiet moment I realized it wasn't for me.",
      },
      {
        id: "z2s-03",
        num: "03",
        title: "Picking a Vehicle",
        duration: "4 min",
        description:
          "How I actually chose this, the trap of chasing the lifestyle instead of the skill, and two questions to find yours.",
      },
      {
        id: "z2s-04",
        num: "04",
        title: "The First Move",
        duration: "5 min",
        description:
          "My first paid gig ($1k for a 50-min doc in Mexico), spec work, and why cheap early work is still worth it.",
      },
      {
        id: "z2s-05",
        num: "05",
        title: "The Gap No One Warns You About",
        duration: "4 min",
        description:
          "Avoidance that looks like motion. The one I stayed stuck in for years, and the exercise that got me out.",
      },
      {
        id: "z2s-06",
        num: "06",
        title: "The Hard Conversation",
        duration: "3 min",
        description:
          "Not the one with your parents. The one with yourself. Why breaking down your own ego is the real move.",
      },
      {
        id: "z2s-07",
        num: "07",
        title: "What \"Working\" Actually Feels Like",
        duration: "4 min",
        description:
          "The part nobody posts about when things start clicking. Loneliness, normalization, and staying a student.",
      },
      {
        id: "z2s-08",
        num: "08",
        title: "The Lifestyle You're Actually Buying",
        duration: "3 min",
        description:
          "Freedom is real. So is everything that comes with it. What this life actually looks like on the inside.",
      },
      {
        id: "z2s-09",
        num: "09",
        title: "The Community",
        duration: "4 min",
        description:
          "Why the people around you matter more than the plan. Scenes vs. communities, and the difference between the two.",
      },
      {
        id: "z2s-10",
        num: "10",
        title: "Your Move",
        duration: "3 min",
        description: "One thing to do this week. That's it.",
      },
    ],
    resources: [
      {
        id: "z2s-starting-line",
        title: "The Starting Line Playbook",
        description:
          "The tactical companion to Video 4. The actual moves to book your first paid gig: the outreach, the rates I'd charge today, the first email I'd send.",
        href: undefined,
      },
    ],
  },
];
