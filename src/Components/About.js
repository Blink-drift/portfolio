export default function About() {
    return(
        <section id = "about">
            <div className="container mx-auto flex px-10">
                <div>
                    <h1 className = "title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, I am Leo.
                    <br className="hidden lg:inline-block"/>I try to build stuff sometimes
                    </h1>
                    <p>
                        Sample text blah blah blah
                    </p>
                    <div className = "flex justify-center">
                    <a
                        href="#contact"
                        className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Work with me
                    </a>
                    <a
                        href="#projects"
                        className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            See My Past Work
                    </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img
                    className = "object-cover object-center rounded"
                    alt = "hero"
                    src = "./coding.svg"
                />
                </div>
            </div>
        </section>
    );
}