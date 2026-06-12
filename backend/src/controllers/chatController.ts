import { Request, Response } from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Personal details context to build system instruction
const LOKESH_RESUME_CONTEXT = `
You are an AI Assistant representing Lokesh Goyal, a highly skilled Full Stack Software Engineer and Gen AI developer.
Your goal is to answer questions from recruiters, hiring managers, and industry leaders about Lokesh's experience, projects, skills, education, and contact details in a professional, polite, and confident tone.

Here is the accurate and complete resume of Lokesh Goyal:

1. BASIC INFORMATION:
- Name: Lokesh Goyal
- Professional Title: Software Engineer / Full Stack Developer / Gen AI Developer
- Experience: 4 years and 2 months
- Location: Faridabad, Haryana, India (Open to remote and relocation)
- Email: kumarlokesh0129@gmail.com
- LinkedIn: https://www.linkedin.com/in/lokesh-goyal-88ba48187/
- GitHub: https://github.com/lokeshgoyal0129

2. PROFESSIONAL SUMMARY:
Lokesh Goyal consistently drives innovation and transforms complex visions into tangible, high-quality software solutions. He excels at leading and empowering cross-functional teams through modern agile methodologies, fostering a culture of collaborative problem-solving and continuous improvement. Lokesh combines strategic leadership with hands-on technical expertise, ensuring seamless project execution and the successful delivery of impactful products.

3. TECH STACK & SKILLS:
- Languages: C#, JavaScript, TypeScript, SQL, HTML5, CSS3
- Frontend: React, Angular, AngularJS, Next.js, Tailwind CSS, Bootstrap, jQuery
- Backend: ASP.NET Core, ASP.NET MVC, Web API, ADO.NET, Node.js, Express
- Databases: SQL Server, PostgreSQL
- DevOps / Cloud / Tools: Azure, GitHub Actions, CI/CD, Git, Visual Studio, Postman, Swagger, Azure DevOps
- Gen AI: Implementing AI agents, Chatbots, LLM APIs (Gemini, OpenAI)

4. WORK EXPERIENCE:
- Senior Software Engineer at Greenware Solution Pvt Ltd (2025 - 2026):
  * Developed and enhanced a cloud-based investment platform supporting Mutual Funds, Bonds, Equities, Fixed Deposits, and Lumpsum transactions.
  * Built responsive and reusable UI components using Angular, TypeScript, HTML, CSS, and Bootstrap.
  * Designed and maintained secure, scalable RESTful APIs using ASP.NET Core and C#, facilitating transaction processing.
  * Reduced production defects by over 40% through unit/integration testing.
  * Contributed to Microsoft Azure cloud deployment, database optimization for high-performance transaction processing.
- Software Engineer at Kalingam Technology Pvt Ltd (2024 - 2025):
  * Developed and maintained scalable web applications using ASP.NET Core, C#, and SQL Server.
  * Built responsive UIs with ASP.NET MVC, HTML, CSS, JavaScript, and Bootstrap.
  * Optimized stored procedures, views, and SQL queries to improve performance.
- Associate Software Engineer at Digital Successive (2022 - 2023):
  * Engineered a GIS-enabled agricultural management platform using ASP.NET MVC, C#, JavaScript, jQuery, and ArcGIS mapping services.
  * Redesigned UI components to improve planner and field staff efficiency.
  * Implemented geospatial data extraction and storage of coordinates into SQL Server.

5. PROJECTS:
- FundCore (Investment platform by Greenware Solutions): A secure login and dashboard system for managing mutual funds, equities, and bonds. Tech: ASP.NET Core, SQL Server, AngularJS, C#. Lokesh handled the full-stack development, UI design, API integration, and SQL queries.
- EDP (Equipment Distribution Platform for Agiliti Health): Tracks medical equipment and health machine locations in hospitals using Azure Maps coordinates. Tech: ASP.NET Core, C#, SQL Server, MVC, JS, jQuery.
- Resume Banaoo: Custom resume builder (https://resumebanaoo.netlify.app/) featuring layout & color customization, Gen AI content generator, ATS scoring analyzer, and 4 templates (3 free, 1 premium).

6. EDUCATION:
- Bachelor of Technology (B.Tech) in Computer Science & Engineering, KCC Institute Of Technology and Management, Noida (2018 - 2022) - scored 77%.

7. PORTFOLIO METRICS / STATS:
- 4+ years of experience
- 10+ APIs developed
- 10+ features delivered
- 4 projects built

INSTRUCTIONS FOR RESPONDING:
- Answer client/recruiter questions based only on this context.
- Keep your answers concise, engaging, and professional.
- If you don't know something or it is not listed, say so politely and offer to connect them with Lokesh via email at kumarlokesh0129@gmail.com.
- Do not make up facts. Be honest and friendly.
- Highlight Lokesh's strengths in ASP.NET Core, C#, Angular, Next.js, and Gen AI.
`;

// Initialize Google Gen AI only if API key is present
let ai: any = null;
const API_KEY = process.env.GEMINI_API_KEY;

if (API_KEY) {
  try {
    ai = new GoogleGenerativeAI(API_KEY);
  } catch (err) {
    console.error('Failed to initialize GoogleGenerativeAI:', err);
  }
}

// Highly intelligent keyword-based fallback engine
const handleFallbackResponse = (message: string): string => {
  const query = message.toLowerCase();
  
  if (query.includes('hi') || query.includes('hello') || query.includes('hey')) {
    return "Hello! I am Lokesh's AI Assistant. I can tell you about Lokesh's skills, professional experience, education, projects, or how to get in touch with him. What would you like to know?";
  }
  
  if (query.includes('skill') || query.includes('technolog') || query.includes('stack') || query.includes('language')) {
    return "Lokesh is a Full Stack Developer. His core skills include:\n- **Languages**: C#, TypeScript, JavaScript, SQL\n- **Frontend**: Next.js, React, Angular, AngularJS, Tailwind CSS, Bootstrap\n- **Backend**: ASP.NET Core, ASP.NET MVC, Web API, Node.js, Express\n- **Databases**: SQL Server, PostgreSQL\n- **DevOps/Tools**: Azure, GitHub Actions, Git, Azure DevOps, Postman, Swagger\n- **AI**: Implementing AI agents and Chatbot integrations.";
  }
  
  if (query.includes('experience') || query.includes('work') || query.includes('history') || query.includes('job') || query.includes('compn') || query.includes('kalingam') || query.includes('greenware') || query.includes('successive')) {
    return "Lokesh has **4+ years of experience** as a Software Engineer. Here is a quick breakdown:\n1. **Greenware Solution Pvt Ltd** (2025 - 2026) as Senior Software Engineer: Worked on a cloud investment platform (FundCore) using Angular, C#, ASP.NET Core, and Azure.\n2. **Kalingam Technology Pvt Ltd** (2024 - 2025) as Software Engineer: Developed scalable web apps using ASP.NET Core, C#, MVC, and SQL Server.\n3. **Digital Successive** (2022 - 2023) as Associate Software Engineer: Developed a GIS agricultural platform with C#, ASP.NET MVC, and ArcGIS.";
  }
  
  if (query.includes('project') || query.includes('portfolio') || query.includes('fundcore') || query.includes('edp') || query.includes('resume')) {
    return "Lokesh has worked on several key projects:\n1. **FundCore**: A fintech investment platform for mutual funds, bonds, equities. Developed full-stack features using ASP.NET Core, Angular JS, C#, and SQL Server.\n2. **EDP (Equipment Distribution Platform)**: Built for Agiliti Health, tracking clinical devices inside hospitals using Azure Maps.\n3. **Resume Banaoo**: A custom React resume generator (https://resumebanaoo.netlify.app/) featuring Gen AI content generation, layout customizations, and ATS score checking.";
  }
  
  if (query.includes('contact') || query.includes('email') || query.includes('phone') || query.includes('reach') || query.includes('linkedin') || query.includes('github') || query.includes('hire')) {
    return "You can reach Lokesh directly via:\n- **Email**: kumarlokesh0129@gmail.com\n- **LinkedIn**: https://www.linkedin.com/in/lokesh-goyal-88ba48187/\n- **GitHub**: https://github.com/lokeshgoyal0129\nHe is actively open to Software Engineer, Full Stack, and Gen AI developer roles!";
  }
  
  if (query.includes('education') || query.includes('college') || query.includes('degree') || query.includes('university') || query.includes('btech') || query.includes('kcc')) {
    return "Lokesh holds a **Bachelor of Technology (B.Tech) in Computer Science & Engineering** from KCC Institute of Technology and Management, Noida (2018 - 2022), where he graduated with a performance score of **77%**.";
  }
  
  if (query.includes('ai') || query.includes('chatbot') || query.includes('agent') || query.includes('generative')) {
    return "Lokesh has strong interest and capability in Gen AI. He has implemented Gen AI content suggestions and ATS analytics in his personal project **Resume Banaoo**, and designed this very chatbot to demonstrate dynamic prompt engineering and agent workflows.";
  }

  return "That's an interesting question! Lokesh's core expertise is in C#, ASP.NET Core, React/Angular, and PostgreSQL/SQL Server, with 4+ years of development experience. For this specific inquiry, I recommend connecting with him directly at kumarlokesh0129@gmail.com or visiting his LinkedIn (https://www.linkedin.com/in/lokesh-goyal-88ba48187/) to set up a chat.";
};

export const chatWithAgent = async (req: Request, res: Response) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ error: 'Message field is required' });
    }

    // Fallback if AI client not initialized (no key or initialization error)
    if (!ai) {
      console.log('Gemini API key not found or failed to load. Using fallback rule engine.');
      const reply = handleFallbackResponse(message);
      return res.json({ reply });
    }

    // If AI initialized, call Gemini model
    const model = ai.getGenerativeModel({
      model: 'gemini-1.5-flash',
      systemInstruction: LOKESH_RESUME_CONTEXT,
    });

    const result = await model.generateContent(message);
    const text = result.response.text();
    return res.json({ reply: text });
  } catch (error: any) {
    console.error('Error in chatWithAgent controller:', error);
    // Safe graceful degradation
    const reply = handleFallbackResponse(req.body.message || '');
    return res.json({ reply });
  }
};
