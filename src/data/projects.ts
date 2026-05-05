export interface Project {
  id: number
  title: string
  description: string
  image: string
  techStack: string[]
  liveUrl: string
  githubUrl: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: '电商平台',
    description: '一个全功能的电商平台，支持商品浏览、购物车、在线支付等核心功能。',
    image: '/projects/ecommerce.png',
    techStack: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/ecommerce',
  },
  {
    id: 2,
    title: '任务管理应用',
    description: '支持拖拽排序、标签分类、团队协作的任务管理工具。',
    image: '/projects/taskapp.png',
    techStack: ['Vue', 'Pinia', 'Express', 'PostgreSQL'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/taskapp',
  },
  {
    id: 3,
    title: '天气预报应用',
    description: '基于地理位置的实时天气查询应用，支持多城市切换和天气预警。',
    image: '/projects/weather.png',
    techStack: ['React', 'Tailwind CSS', 'OpenWeather API'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/weather',
  },
  {
    id: 4,
    title: '博客系统',
    description: '支持 Markdown 编辑、标签分类、评论互动的个人博客平台。',
    image: '/projects/blog.png',
    techStack: ['Next.js', 'MDX', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/blog',
  },
]
