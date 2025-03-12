import dataassist from '../assets/svg/projects/dataassist.svg'
import rag from '../assets/svg/projects/rag.svg'
import scrap from '../assets/svg/projects/webscrap.svg'

export const projectsData = [
    {
        id: 1,
        projectName: 'Data Assist',
        projectDesc: 'DataAssist is a visual query and analysis tool designed for non-technical users to easily retrieve, analyze, and visualize data.',
        tags: ['NLP', 'Generative AI','Query language', 'Django'],
        code: '#',
        demo: '#',
        image: dataassist
    },
    {
        id: 2,
        projectName: 'Recommendation System - RAG',
        projectDesc: 'The project aims to develop a Shoe Recommendation System using the RAG (Retrieval-Augmented Generation) architecture',
        tags: ['LLM', 'NLP', 'Faiss','Pytorch'],
        code: 'https://github.com/Sureshkannan0919/Shoe_recommendation_system-RAG-.git',
        demo: '#',
        image: rag
    },
    {
        id: 3,
        projectName: 'Advanced Web Scraping',
        projectDesc: 'Advanced Web Scraping in Flipkart Automation Using Selenium and BeautifulSoup',
        tags: ['Selenium', 'BeautifulSoup', 'Pandas'],
        code: 'https://github.com/Sureshkannan0919/flipkart_web_scraping',
        demo: '#',
        image: scrap
    },
   
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/