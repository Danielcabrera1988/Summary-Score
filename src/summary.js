import reactionIcon from './assets/images/icon-reaction.svg'
import memoryIcon from './assets/images/icon-memory.svg'
import verbalIcon from './assets/images/icon-verbal.svg'
import visualIcon from './assets/images/icon-visual.svg'

export const summary = [
  {
    category: "Reaction",
    score: 80,
    icon: reactionIcon,
    color: 'hsl(0, 100%, 67%)',
    background: 'hsl(0, 100%, 98%)'
  },
  {
    category: "Memory",
    score: 92,
    icon: memoryIcon,
    color: 'hsl(39, 100%, 56%)',
    background: 'hsl(39, 100%, 95%)'
  },
  {
    category: "Verbal",
    score: 61,
    icon: verbalIcon,
    color: 'hsl(166, 100%, 37%)',
    background: 'hsl(166, 50%, 96%)'
  },
  {
    category: "Visual",
    score: 72,
    icon: visualIcon,
    color: 'hsl(234, 85%, 45%)',
    background: 'hsl(234, 76%, 97%)'
  }
];
