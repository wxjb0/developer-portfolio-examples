export interface Skill {
  name: string
  category: string
}

export const skills: Skill[] = [
  // 前端
  { name: 'React', category: '前端' },
  { name: 'TypeScript', category: '前端' },
  { name: 'Vue', category: '前端' },
  { name: 'Tailwind CSS', category: '前端' },
  { name: 'Next.js', category: '前端' },
  { name: 'HTML/CSS', category: '前端' },

  // 后端
  { name: 'Node.js', category: '后端' },
  { name: 'Express', category: '后端' },
  { name: 'Python', category: '后端' },
  { name: 'Java', category: '后端' },

  // 数据库
  { name: 'MongoDB', category: '数据库' },
  { name: 'PostgreSQL', category: '数据库' },
  { name: 'MySQL', category: '数据库' },
  { name: 'Redis', category: '数据库' },

  // 工具
  { name: 'Git', category: '工具' },
  { name: 'Docker', category: '工具' },
  { name: 'Linux', category: '工具' },
  { name: 'Webpack', category: '工具' },
]
