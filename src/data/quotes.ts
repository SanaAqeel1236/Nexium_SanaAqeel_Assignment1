export const quotesData = {
  motivation: [
    "Push yourself, because no one else is going to do it for you.",
    "Don't watch the clock; do what it does. Keep going.",
    "Great things never come from comfort zones.",
  ],
  success: [
    "Success usually comes to those who are too busy to be looking for it.",
    "The road to success is always under construction.",
    "Don't be afraid to give up the good to go for the great.",
  ],
  life: [
    "Life is what happens when you're busy making other plans.",
    "The purpose of our lives is to be happy.",
    "In the end, we only regret the chances we didn’t take.",
  ],
} as const;

export type Topic = keyof typeof quotesData; // "motivation" | "success" | "life"

