import Mockingbot from '../images/logos/ym-1.svg';
import Xd from '../images/logos/ym-2.png';
import RemoteWork from '../images/logos/ym-3.svg'
import YMLOGO from '../images/logos/ym-logo.png';
import CMLOGO from '../images/logos/company-log.png';
import RichTextLOGO from '../images/logos/rich-text.png';


export const Name = 'Yumao';

export const About = (
  <>{`I am a front-end developer, focusing on Editors / Graphics, and the new techs.`}</>
);
export const AboutExtended = `I am a front-end developer, focusing on Editors / Graphics, and the new techs.`;

export type Project = {
  title: string;
  techStack: string[];
  description: string;
  logo: any;
  link?: {
    label: string;
    href: string;
  };
};

export const MyCurrentProjects: Project[] = [
  {
    title: 'UI 设计工具',
    techStack: ['TypeScript', 'React', 'Skia', 'CanvasKit', 'CRDT'],
    description: '一款 2D 图形设计编辑工具',
    logo: YMLOGO,
    link: {
      label: 'graphic.yumao.one',
      href: 'https://graphic.yumao.one',
    },
  }
];

export const MyPastProjects: Project[] = [
  {
    title: '墨刀',
    techStack: [
      'TypeScript',
      'React',
      'Node.js'
    ],
    description:
      '在线原型设计工具，可以快速搭建产品原型，演示项目效果',
    logo: Mockingbot,
    link: {
      label: 'modao.cc',
      href: 'https://modao.cc',
    },
  },
  {
    title: 'Rich Text 编辑器',
    techStack: ['React'],
    description: 'block-style 风格的富文本编辑器，基于 MVC 模式，数据与渲染分离式',
    logo: RichTextLOGO,
    link: {
      label: 'richtext.yumao.one',
      href: 'https://richtext.yumao.one',
    },
  },
  {
    title: '可视化 Web 建站工具',
    techStack: ['TypeScript', 'Vue', 'Nuxt'],
    description: '用于快速上线游戏 H5 页面，活动落地页和广告页投放页，方便开发和运营人员快速配置上线',
    logo: CMLOGO,
    link: {
      label: '公司内部项目',
      href: '',
    },
  }
];

export const Work = [
  {
    company: '远程工作',
    title: 'Web Developer',
    logo: RemoteWork,
    start: '2023.02',
    end: '2023.09',
  },
  {
    company: '心动网络',
    title: 'Web Developer',
    logo: Xd,
    start: '2021.05',
    end: '2022.12',
  },
  {
    company: '墨刀',
    title: 'Web Developer',
    logo: Mockingbot,
    start: '2018.08',
    end: '2021.04',
  },
];
