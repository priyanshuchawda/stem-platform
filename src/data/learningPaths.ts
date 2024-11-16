import { LearningPath, ContentType } from '../types/LearningPath';

const learningPaths: LearningPath[] = [
  {
    id: 'path-1',
    title: 'Introduction to Coding',
    description: 'Learn the basics of programming with Python.',
    topics: [
      {
        id: 'topic-1',
        title: 'Variables and Data Types',
        description: 'Understand how to store and manipulate data in Python.',
        content: [
          {
            id: 'content-1',
            type: ContentType.Video,
            url: 'https://www.youtube.com/watch?v=...' // Replace with actual video URL
          },
          {
            id: 'content-2',
            type: ContentType.Quiz,
            url: 'https://www.quizizz.com/...' // Replace with actual quiz URL
          },
          {
            id: 'content-3',
            type: ContentType.Interactive,
            url: 'https://www.codinggame.com/...' // Interactive coding activity
          },
        ]
      },
      {
        id: 'topic-2',
        title: 'Control Flow',
        description: 'Learn about conditionals and loops in Python.',
        content: [
          {
            id: 'content-4',
            type: ContentType.Article,
            url: 'https://www.realpython.com/python-while-loop/' // Replace with article URL
          },
          {
            id: 'content-5',
            type: ContentType.Quiz,
            url: 'https://kahoot.com/' // Replace with quiz URL
          },
        ]
      },
    ]
  },
  {
    id: 'path-2',
    title: 'Basic Physics',
    description: 'Explore foundational concepts in Physics through interactive lessons.',
    topics: [
      {
        id: 'topic-1',
        title: 'Newton’s Laws of Motion',
        description: 'Learn about the principles governing motion and forces.',
        content: [
          {
            id: 'content-1',
            type: ContentType.Video,
            url: 'https://www.youtube.com/watch?v=...' // Video on Newton’s Laws
          },
          {
            id: 'content-2',
            type: ContentType.Simulation,
            url: 'https://www.physicsclassroom.com/...' // Physics simulation activity
          },
        ]
      },
      {
        id: 'topic-2',
        title: 'Energy and Work',
        description: 'Understand the concepts of energy, work, and power in physics.',
        content: [
          {
            id: 'content-3',
            type: ContentType.Video,
            url: 'https://www.youtube.com/watch?v=...' // Video on energy and work
          },
          {
            id: 'content-4',
            type: ContentType.Quiz,
            url: 'https://www.quizizz.com/...' // Energy and work quiz
          },
        ]
      },
    ]
  },
  {
    id: 'path-3',
    title: 'Introduction to Biology',
    description: 'Discover the basics of biology, including cells, genetics, and ecosystems.',
    topics: [
      {
        id: 'topic-1',
        title: 'Cell Structure and Function',
        description: 'Learn about the parts of a cell and their functions.',
        content: [
          {
            id: 'content-1',
            type: ContentType.Video,
            url: 'https://www.youtube.com/watch?v=...' // Video on cell biology
          },
          {
            id: 'content-2',
            type: ContentType.Quiz,
            url: 'https://www.quizizz.com/...' // Quiz on cell structure
          },
          {
            id: 'content-3',
            type: ContentType.Interactive,
            url: 'https://www.cellsalive.com/' // Interactive cell model
          },
        ]
      },
      {
        id: 'topic-2',
        title: 'Genetics and Heredity',
        description: 'Explore how traits are inherited and the basics of genetics.',
        content: [
          {
            id: 'content-4',
            type: ContentType.Article,
            url: 'https://www.genome.gov/' // Genetics basics article
          },
          {
            id: 'content-5',
            type: ContentType.Quiz,
            url: 'https://www.kahoot.com/' // Genetics quiz
          },
        ]
      },
    ]
  },
  {
    id: 'path-4',
    title: 'Fundamentals of Mathematics',
    description: 'Build your foundational math skills, from algebra to calculus.',
    topics: [
      {
        id: 'topic-1',
        title: 'Algebraic Expressions',
        description: 'Learn to work with variables, terms, and algebraic equations.',
        content: [
          {
            id: 'content-1',
            type: ContentType.Video,
            url: 'https://www.youtube.com/watch?v=...' // Algebra basics video
          },
          {
            id: 'content-2',
            type: ContentType.Quiz,
            url: 'https://www.quizizz.com/...' // Algebra quiz
          },
        ]
      },
      {
        id: 'topic-2',
        title: 'Introduction to Calculus',
        description: 'Understand the basics of derivatives and integrals.',
        content: [
          {
            id: 'content-3',
            type: ContentType.Video,
            url: 'https://www.youtube.com/watch?v=...' // Calculus intro video
          },
          {
            id: 'content-4',
            type: ContentType.Interactive,
            url: 'https://www.khanacademy.org/' // Interactive calculus exercises
          },
        ]
      },
    ]
  },
  {
    id: 'path-5',
    title: 'Chemistry Essentials',
    description: 'Learn fundamental concepts in chemistry, from atoms to reactions.',
    topics: [
      {
        id: 'topic-1',
        title: 'Atomic Structure',
        description: 'Understand the parts of an atom and how atoms make up matter.',
        content: [
          {
            id: 'content-1',
            type: ContentType.Video,
            url: 'https://www.youtube.com/watch?v=...' // Atomic structure video
          },
          {
            id: 'content-2',
            type: ContentType.Quiz,
            url: 'https://www.quizizz.com/...' // Quiz on atomic structure
          },
          {
            id: 'content-3',
            type: ContentType.Simulation,
            url: 'https://www.phet.colorado.edu/' // Atomic model simulation
          },
        ]
      },
      {
        id: 'topic-2',
        title: 'Chemical Reactions',
        description: 'Explore how chemical reactions work and balance equations.',
        content: [
          {
            id: 'content-4',
            type: ContentType.Article,
            url: 'https://www.chemguide.co.uk/' // Introduction to chemical reactions
          },
          {
            id: 'content-5',
            type: ContentType.Quiz,
            url: 'https://kahoot.com/' // Chemical reactions quiz
          },
        ]
      },
    ]
  },
];

export default learningPaths;
