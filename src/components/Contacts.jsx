const Contacts = () => {
  return (
    <section id="contacts" className="py-10 bg-black text-white">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-4xl font-light text-center mb-12">Get In Touch</h2>
        <div className="max-w-2xl mx-auto text-center">
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-12">
            <a
              href="mailto:rohbpaloma@gmail.com"
              className="group flex items-center gap-3 text-xl border border-white/20 px-6 py-3 rounded-lg
                         transition-all duration-300 hover:border-violet-500 hover:bg-violet-500/10 hover:text-violet-400"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              rohbpaloma@gmail.com
            </a>
            
            <a
              href="https://github.com/rohb22"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-xl border border-white/20 px-6 py-3 rounded-lg
                         transition-all duration-300 hover:border-violet-500 hover:bg-violet-500/10 hover:text-violet-400"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
              rohb22
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
