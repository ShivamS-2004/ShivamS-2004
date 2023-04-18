import React from 'react';

const Python_Features = () => {


  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-blue-500 text-white p-4">
        <h1 className="text-lg font-bold"> Python Features</h1>
      </nav>
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-bold mb-4">Python Features</h2>
        <p className="mb-4">
          Python provides many useful features which make it popular and valuable from the other programming languages. It supports object-oriented programming, procedural programming approaches and provides dynamic memory allocation. We have listed below a few essential features.
        </p>
        <div className=" flex justify ">
          <ol className='list-decimal list-inside'>
            <li className='font-bold'>Easy to Learn and Use</li>
            <p className='mx-4'>Python is easy to learn as compared to other programming languages. Its syntax is straightforward and much the same as the English language. There is no use of the semicolon or curly-bracket, the indentation defines the code block. It is the recommended programming language for beginners.
            </p>
            <li className='font-bold'>Expressive Language</li>
            <p className='mx-4'>Python is an interpreted language; it means the Python program is executed one line at a time. The advantage of being interpreted language, it makes debugging easy and portable.
            </p>
            <li className='font-bold'>Interpreted Language</li>
            <p className='mx-4'>Python is easy to learn as compared to other programming languages. Its syntax is straightforward and much the same as the English language. There is no use of the semicolon or curly-bracket, the indentation defines the code block. It is the recommended programming language for beginners.
            </p>
            <li className='font-bold'>Cross-platform Language</li>
            <p className='mx-4'>Python can run equally on different platforms such as Windows, Linux, UNIX, and Macintosh, etc. So, we can say that Python is a portable language. It enables programmers to develop the software for several competing platforms by writing a program only once.
            </p>
            <li className='font-bold'>Free and Open Source</li>
            <p className='mx-4'>Python is freely available for everyone. It is freely available on its official website www.python.org. It has a large community across the world that is dedicatedly working towards make new python modules and functions. Anyone can contribute to the Python community. The open-source means, "Anyone can download its source code without paying any penny."
            </p>
            <li className='font-bold'>Object-Oriented Language</li>
            <p className='mx-4'>Python supports object-oriented language and concepts of classes and objects come into existence. It supports inheritance, polymorphism, and encapsulation, etc. The object-oriented procedure helps to programmer to write reusable code and develop applications in less code.
            </p>
            <li className='font-bold'>Extensible</li>
            <p className='mx-4'>It provides a vast range of libraries for the various fields such as machine learning, web developer, and also for the scripting. There are various machine learning libraries, such as Tensor flow, Pandas, Numpy, Keras, and Pytorch, etc. Django, flask, pyramids are the popular framework for Python web development.</p>

            <li className='font-bold'>Large Standard Library</li>
            <p className='mx-4'>Python is easy to learn as compared to other programming languages. Its syntax is straightforward and much the same as the English language. There is no use of the semicolon or curly-bracket, the indentation defines the code block. It is the recommended programming language for beginners.
            </p>
            <li className='font-bold'>GUI Programming Support</li>
            <p className='mx-4'>Graphical User Interface is used for the developing Desktop application. PyQT5, Tkinter, Kivy are the libraries which are used for developing the web application.
            </p>
            <li className='font-bold'>Integrated</li>
            <p className='mx-4'>It can be easily integrated with languages like C, C++, and JAVA, etc. Python runs code line by line like C,C++ Java. It makes easy to debug the code.
            </p>
            <li className='font-bold'>Embeddable</li>
            <p className='mx-4'>The code of the other programming language can use in the Python source code. We can use Python source code in another programming language as well. It can embed other language into our code.
            </p>
            <li className='font-bold'>Dynamic Memory Allocation</li>
            <p className='mx-4'>In Python, we don't need to specify the data-type of the variable. When we assign some value to the variable, it automatically allocates the memory to the variable at run time. Suppose we are assigned integer value 15 to x, then we don't need to write int x = 15. Just write x = 15.
            </p>



          </ol>
        </div>
      </main>
    </div>
  );
};

export default Python_Features;
