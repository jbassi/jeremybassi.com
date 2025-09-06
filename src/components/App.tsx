import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        {/* Hero Section */}
        <section className="section-spacing">
          <h1 className="large-text font-bold mb-8">
            Hello.
          </h1>
          <div className="large-text font-light space-y-6 max-w-prose">
            <p>
              I'm Jeremy Bassi, a{' '}
              <span className="accent-link font-medium">Senior iOS Engineer</span>{' '}
              based in the Bay Area.
            </p>
            <p>
              Currently working to make Bitcoin every day money at{' '}
              <a 
                href="https://block.xyz/" 
                className="accent-link font-medium hover:underline"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Block
              </a>
              , on{' '}
              <a 
                href="https://squareup.com/" 
                className="accent-link font-medium hover:underline"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Square
              </a> and {' '}
              <a 
                href="https://cash.app/" 
                className="accent-link font-medium hover:underline"
                target="_blank" 
                rel="noopener noreferrer"
              >Cash App</a>.
            </p>
            <p>
              On the side, I'm working on 
              {' '}
              <a 
                href="https://www.trappedinside.ai/" 
                className="accent-link font-medium hover:underline"
                target="_blank" 
                rel="noopener noreferrer"
              >
                trappedinside.ai
              </a>
              , a LLM art experience.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="section-spacing">
          <h2 className="large-text font-bold mb-8">
            About.
          </h2>
          <div className="large-text font-light space-y-6 max-w-prose">
            <p>
              Born and raised in the Bay Area, I studied computer science at
              {' '}
              <a 
                href="https://ucsd.edu/"
                className="accent-link font-medium hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                UC San Diego
              </a>.
              
              After graduation, I moved to San Francisco to pursue opportunities in tech.
            </p>
            <p>
              When I'm not coding you can find me diving into a new hobby, playing video games,
              or working on personal projects.
            </p>
          </div>
        </section>

        {/* Work Section */}
        <section className="section-spacing">
          <h2 className="large-text font-bold mb-8">
            Work.
          </h2>
          <div className="space-y-12">
            {/* Current Role */}
            <div className="grid md:grid-cols-4 gap-6">
              <div className="md:col-span-1">
                <h3 className="text-lg font-semibold text-gray-900">Current</h3>
                <p className="text-base text-gray-600">2020 - Present</p>
              </div>
              <div className="md:col-span-3">
                <h4 className="text-xl font-semibold mb-2">Senior iOS Engineer</h4>
                <p className="text-lg text-gray-600 mb-4">
                  <a href="#" className="accent-link hover:underline" target="_blank" rel="noopener noreferrer">
                    Block
                  </a>
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                  Working to make Bitcoin every day money on Square and Cash App.
                </p>
              </div>
            </div>

            {/* Previous Roles */}
            <div className="grid md:grid-cols-4 gap-6">
              <div className="md:col-span-1">
                <h3 className="text-lg font-semibold text-gray-900">Previous</h3>
                <p className="text-base text-gray-600">2016 - 2020</p>
              </div>
              <div className="md:col-span-3">
                <h4 className="text-xl font-semibold mb-2">iOS Engineer</h4>
                <p className="text-lg text-gray-600 mb-4">
                  <a href="#" className="accent-link hover:underline" target="_blank" rel="noopener noreferrer">
                    Workday
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-spacing">
          <h2 className="large-text font-bold mb-8">
            Contact.
          </h2>
          <div className="large-text font-light space-y-6 max-w-prose">
            <p>
              Interested in working together or just want to say hello? 
              Drop me a line and let's start a conversation.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <p>
                  <a 
                    href="mailto:TODO (email)" 
                    className="accent-link hover:underline text-xl"
                  >
                    TODO (email)
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Social</h3>
                <div className="space-y-2">
                  <p>
                    <a 
                      href="https://x.com/jeremybassi" 
                      className="accent-link hover:underline text-xl"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      X
                    </a>
                  </p>
                  <p>
                    <a 
                      href="https://linkedin.com/in/jeremybassi" 
                      className="accent-link hover:underline text-xl"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-12 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            © 2025 Jeremy Bassi. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App
