import {
  ArrowDown, ArrowRight, ArrowUpRight, Award, BookOpen, Braces, BriefcaseBusiness,
  Code2, Database, Download, Github, GraduationCap, Linkedin, Mail, MapPin,
  Menu, Sparkles, Terminal, Users, BrainCircuit, Layers3
} from "lucide-react";

const skills = [
  { title: "Languages", items: ["Python", "Java", "JavaScript", "SQL", "C"] },
  { title: "Web & Backend", items: ["React", "Next.js", "HTML", "CSS", "FastAPI", "Flask", "Node.js"] },
  { title: "Data & AI", items: ["PyTorch", "Scikit-learn", "CNN", "OpenCV", "Pandas"] },
  { title: "Tools & Platforms", items: ["Git", "GitHub", "MongoDB", "PostgreSQL", "AWS", "IPFS"] },
];

const projects = [
  {
    number: "01",
    title: "AI-Generated Face Detection",
    category: "Machine Learning · Computer Vision",
    description: "A project exploring real-versus-AI-generated face classification using CNNs and Local Binary Pattern (LBP) features, with adversarial robustness experiments.",
    stack: ["Python", "PyTorch", "CNN", "LBP"],
    icon: BrainCircuit,
    link: "#contact",
    linkLabel: "Ask about project",
  },
  {
    number: "02",
    title: "Blockchain Electronic Health Records",
    category: "Full Stack · Blockchain",
    description: "A role-based electronic health records concept using blockchain verification and decentralized file storage to support integrity and controlled access.",
    stack: ["React", "TypeScript", "Node.js", "IPFS"],
    icon: Layers3,
    link: "#contact",
    linkLabel: "Ask about project",
  },
  {
    number: "03",
    title: "Ride-Sharing Application",
    category: "Full Stack · API Development",
    description: "A team project connecting a client application with backend APIs and PostgreSQL, with authentication and background-task components.",
    stack: ["React", "FastAPI", "PostgreSQL", "Redis"],
    icon: Database,
    link: "#contact",
    linkLabel: "Ask about project",
  },
];

export default function Home() {
  return (
    <main>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080b16]/90 backdrop-blur-xl">
        <nav className="section-wrap flex h-[72px] items-center justify-between gap-5">
          <a href="#home" className="flex items-center gap-3 font-bold tracking-tight text-lg sm:text-xl">
            <span className="rounded-lg bg-violet-500/15 p-2 text-violet-300"><Code2 size={22}/></span>
            <span>Jamuna Sri <span className="gradient-text">B.</span></span>
          </a>
          <div className="hidden items-center gap-6 text-sm md:flex">
            <a className="nav-link" href="#home">Home</a><a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#skills">Skills</a><a className="nav-link" href="#projects">Projects</a>
            <a className="nav-link" href="#education">Education</a><a className="nav-link" href="#contact">Contact</a>
          </div>
          <div className="flex items-center gap-3">
            <a aria-label="GitHub profile" className="rounded-lg p-2 text-slate-300 hover:bg-white/5 hover:text-white" href="https://github.com/Jamunasrib" target="_blank" rel="noreferrer"><Github size={19}/></a>
            <a aria-label="LinkedIn profile" className="rounded-lg p-2 text-slate-300 hover:bg-white/5 hover:text-white" href="https://www.linkedin.com/in/jamuna-sri-b-b808bb249/" target="_blank" rel="noreferrer"><Linkedin size={19}/></a>
          </div>
        </nav>
      </header>

      <section id="home" className="section-wrap grid min-h-[650px] items-center gap-12 py-20 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <div className="pill mb-7"><GraduationCap size={17}/> 2026 CSE Graduate</div>
          <p className="mb-2 text-xl font-semibold text-violet-200 sm:text-2xl">Hi, I&apos;m</p>
          <h1 className="text-5xl font-black leading-[1.04] tracking-[-.055em] sm:text-7xl">Jamuna Sri <span className="gradient-text">B.</span></h1>
          <h2 className="mt-5 text-2xl font-bold text-violet-300 sm:text-3xl">Software Developer</h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            A Computer Science graduate from Madras Institute of Technology, Anna University. I enjoy building useful applications, solving problems, and exploring full-stack development, AI, and cloud technologies.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="primary-btn" href="#projects">Explore My Projects <ArrowRight size={17}/></a>
            <a className="secondary-btn" href="/Resume_Jamunasrib.pdf" download><Download size={17}/> Download Resume</a>
          </div>
          <div className="mt-7 flex items-center gap-3 text-sm text-slate-400">
            <span className="h-px w-8 bg-violet-400"></span> Open to software development opportunities
          </div>
        </div>
        <div className="relative mx-auto flex min-h-[330px] w-full max-w-[430px] items-center justify-center">
          <div className="absolute h-64 w-64 rounded-full bg-violet-600/20 blur-3xl sm:h-80 sm:w-80"/>
          <div className="glass-card purple-glow relative w-full rotate-2 p-7 sm:p-9">
            <div className="mb-7 flex items-center justify-between">
              <div className="flex gap-2"><span className="h-2.5 w-2.5 rounded-full bg-rose-400"/><span className="h-2.5 w-2.5 rounded-full bg-amber-300"/><span className="h-2.5 w-2.5 rounded-full bg-emerald-400"/></div>
              <span className="font-mono text-xs text-slate-500">developer.ts</span>
            </div>
            <div className="font-mono text-sm leading-8 sm:text-base">
              <p className="text-violet-300">const developer = {"{"}</p>
              <p className="pl-5 text-slate-300">name: <span className="text-emerald-300">&quot;Jamuna Sri B&quot;</span>,</p>
              <p className="pl-5 text-slate-300">role: <span className="text-emerald-300">&quot;Software Developer&quot;</span>,</p>
              <p className="pl-5 text-slate-300">graduation: <span className="text-amber-200">2026</span>,</p>
              <p className="pl-5 text-slate-300">interests: [</p>
              <p className="pl-10 text-emerald-300">&quot;Full Stack&quot;, &quot;AI/ML&quot;,</p>
              <p className="pl-10 text-emerald-300">&quot;Problem Solving&quot;</p>
              <p className="pl-5 text-slate-300">]</p>
              <p className="text-violet-300">{"}"};</p>
            </div>
            <div className="mt-7 flex items-center gap-2 border-t border-white/10 pt-5 text-sm text-slate-400"><Sparkles size={16} className="text-violet-300"/> Building, learning, improving.</div>
          </div>
          <div className="absolute -bottom-2 -left-3 rounded-xl border border-violet-400/25 bg-[#11152a] px-4 py-3 shadow-xl"><div className="flex items-center gap-2 text-sm font-semibold"><Terminal size={17} className="text-violet-300"/> Always learning</div></div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="section-wrap">
          <p className="eyebrow">A little about me</p>
          <h2 className="section-title mt-3">About <span className="gradient-text">Me</span></h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_.8fr]">
            <div className="space-y-5 text-base leading-8 text-slate-300">
              <p>I&apos;m a 2026 Computer Science and Engineering graduate from Madras Institute of Technology (MIT), Anna University. I like turning ideas into practical software and learning how frontend, backend, databases, and intelligent systems work together.</p>
              <p>Through academic and team projects, I have explored machine learning, API development, databases, and blockchain-based applications. I&apos;m looking for an opportunity to grow as a software developer, contribute to a team, and keep improving through real-world work.</p>
              <div className="grid gap-3 pt-2 sm:grid-cols-3">
                <div className="glass-card p-4"><Code2 className="mb-3 text-violet-300"/><p className="font-semibold">Problem solving</p><p className="mt-1 text-sm text-slate-400">Think clearly, build carefully</p></div>
                <div className="glass-card p-4"><BookOpen className="mb-3 text-violet-300"/><p className="font-semibold">Continuous learning</p><p className="mt-1 text-sm text-slate-400">Explore and improve</p></div>
                <div className="glass-card p-4"><Users className="mb-3 text-violet-300"/><p className="font-semibold">Teamwork</p><p className="mt-1 text-sm text-slate-400">Build better together</p></div>
              </div>
            </div>
            <div className="glass-card p-6 sm:p-8">
              <InfoRow icon={<GraduationCap size={19}/>} label="Degree" value="B.E. Computer Science and Engineering"/>
              <InfoRow icon={<BookOpen size={19}/>} label="College" value="Madras Institute of Technology, Anna University"/>
              <InfoRow icon={<MapPin size={19}/>} label="Based in" value="Tamil Nadu, India"/>
              <InfoRow icon={<BriefcaseBusiness size={19}/>} label="Career focus" value="Software Development"/>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="section-wrap">
          <p className="eyebrow">Tools of the trade</p><h2 className="section-title mt-3">Technical <span className="gradient-text">Skills</span></h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-400">A selection of technologies I&apos;ve used in coursework and projects. I&apos;m continuing to strengthen these skills through hands-on practice.</p>
          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            {skills.map((group) => <div className="glass-card p-6" key={group.title}><h3 className="mb-4 flex items-center gap-2 font-bold"><Braces size={18} className="text-violet-300"/>{group.title}</h3><div className="flex flex-wrap gap-2">{group.items.map(item => <span className="skill-chip" key={item}>{item}</span>)}</div></div>)}
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="section-wrap">
          <p className="eyebrow">Selected work</p><h2 className="section-title mt-3">Featured <span className="gradient-text">Projects</span></h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-400">Projects that reflect my interest in software engineering, machine learning, and building practical applications.</p>
          <div className="mt-9 grid gap-5 lg:grid-cols-3">
            {projects.map(project => { const Icon = project.icon; return <article className="glass-card group flex flex-col p-6 transition duration-200 hover:-translate-y-1 hover:border-violet-400/50" key={project.number}>
              <div className="mb-6 flex items-center justify-between"><div className="rounded-xl bg-violet-500/15 p-3 text-violet-300"><Icon size={25}/></div><span className="font-mono text-sm text-slate-500">{project.number}</span></div>
              <p className="text-xs font-bold uppercase tracking-wider text-violet-300">{project.category}</p>
              <h3 className="mt-3 text-xl font-bold">{project.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-7 text-slate-400">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">{project.stack.map(item => <span key={item} className="rounded-md bg-white/5 px-2.5 py-1.5 text-xs text-slate-300">{item}</span>)}</div>
              <a href={project.link} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-violet-300 hover:text-violet-200">{project.linkLabel}<ArrowUpRight size={16}/></a>
            </article>})}
          </div>
        </div>
      </section>

      <section id="education" className="section">
        <div className="section-wrap">
          <p className="eyebrow">My learning journey</p><h2 className="section-title mt-3">Education <span className="gradient-text">& Credentials</span></h2>
          <div className="mt-9 grid gap-5 md:grid-cols-2">
            <div className="glass-card p-6 sm:p-8"><div className="mb-5 inline-flex rounded-xl bg-violet-500/15 p-3 text-violet-300"><GraduationCap size={25}/></div><p className="text-sm font-semibold text-violet-300">2026 · Graduate</p><h3 className="mt-2 text-xl font-bold">B.E. Computer Science and Engineering</h3><p className="mt-2 text-slate-300">Madras Institute of Technology</p><p className="mt-1 text-sm text-slate-500">Anna University, Chennai</p></div>
            <div className="glass-card p-6 sm:p-8"><div className="mb-5 inline-flex rounded-xl bg-violet-500/15 p-3 text-violet-300"><Award size={25}/></div><p className="text-sm font-semibold text-violet-300">Diploma</p><h3 className="mt-2 text-xl font-bold">Diploma in Computer Engineering</h3><p className="mt-2 text-slate-300">Kongunadu Polytechnic College</p><p className="mt-1 text-sm text-slate-500">Thottiyam, Trichy</p><div className="mt-5 border-t border-white/10 pt-4 text-sm text-slate-400">Add verified certifications here before publishing.</div></div>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="section-wrap">
          <div className="glass-card purple-glow mx-auto max-w-4xl px-6 py-10 text-center sm:px-12 sm:py-14">
            <p className="eyebrow">Let&apos;s connect</p><h2 className="section-title mt-3">Have a role or project in <span className="gradient-text">mind?</span></h2>
            <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-300">I&apos;m interested in software development opportunities where I can contribute, learn, and build useful products. Feel free to reach out.</p>
            <a className="primary-btn mt-7" href="mailto:jamunasrib23@gmail.com"><Mail size={17}/> Email Me <ArrowRight size={17}/></a>
            <div className="mt-6 flex justify-center gap-4 text-slate-400"><a className="inline-flex items-center gap-2 hover:text-white" href="https://github.com/" target="_blank" rel="noreferrer"><Github size={18}/> GitHub</a><a className="inline-flex items-center gap-2 hover:text-white" href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={18}/> LinkedIn</a></div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-7"><div className="section-wrap flex flex-col items-center justify-between gap-3 text-center text-sm text-slate-500 sm:flex-row"><p>© {new Date().getFullYear()} Jamuna Sri B. Built with Next.js.</p><a href="#home" className="inline-flex items-center gap-2 hover:text-violet-300">Back to top <ArrowDown size={14}/></a></div></footer>
    </main>
  );
}

function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return <div className="flex gap-4 border-b border-white/10 py-4 last:border-0 last:pb-0 first:pt-0"><div className="mt-1 text-violet-300">{icon}</div><div><p className="text-xs uppercase tracking-wider text-slate-500">{label}</p><p className="mt-1 text-sm leading-6 text-slate-200">{value}</p></div></div>;
}
