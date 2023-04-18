import React from 'react';

const Python_Applications = () => {
  const greet = (name) => {
    return `Hello, ${name}!`;
  };

  const calculateArea = (length, width) => {
    return length * width;
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-blue-500 text-white p-4">
        <h1 className="text-lg font-bold"> Python Applications</h1>
      </nav>
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-bold mb-4">What are Python_Applicationss in ?</h2>
        <p className="mb-4">
          Python_Applicationss are one of the fundamental building blocks in . They are reusable blocks of code that can be called and executed from different parts of a program. Python_Applicationss take input in the form of parameters and return output in the form of a value or object.
        </p>
        <h2 className="text-xl font-bold mb-4">Defining a Python_Applications</h2>
        <p className="mb-4">
          Python_Applicationss in  can be defined using the <code>Python_Applications</code> keyword, followed by the Python_Applications name, the parameter list enclosed in parentheses, and the Python_Applications body enclosed in curly braces. Here are some examples:
        </p>
        <div className="mb-4">
          <p className="font-medium mb-2">Example 1: Greeting Python_Applications</p>
          <pre className="bg-gray-400 text-white p-3  rounded-lg mb-4 w-full overflow-auto">
          <code >
            {`const greet = (name) => {
  return \`Hello, \${name}!\`;
};

console.log(greet('John')); // Output: Hello, John!`}
          </code>
          </pre>
        </div>
        <div className="mb-4">
          <p className="font-medium mb-2">Example 2: Area calculation Python_Applications</p>
          <pre className="bg-gray-400 text-white p-3  rounded-lg mb-4 w-full overflow-auto">
          <code >
            {`const calculateArea = (length, width) => {
  return length * width;
};

console.log(calculateArea(5, 3)); // Output: 15`}
          </code>
          </pre>
        </div>
        <h2 className="text-xl font-bold mb-4">Calling a Python_Applications</h2>
        <p className="mb-4">
          Once a Python_Applications is defined, it can be called from any part of the program. To call a Python_Applications, simply use its name followed by the argument list enclosed in parentheses. Here are some examples:
        </p>
        <div className="mb-4">
          <p className="font-medium mb-4">Example 1: Greeting Python_Applications</p>
          <pre className="bg-gray-400 text-white p-3  rounded-lg mb-4 w-full overflow-auto">
          <code >
            {`console.log(greet('John')); // Output: Hello, John!`}
          </code>
          </pre>
        </div>
        <div className="mb-4">
          <p className="font-medium mb-2">Example 2: Area calculation Python_Applications</p>
          <pre className="bg-gray-400 text-white p-3  rounded-lg mb-4 w-full overflow-auto">
          <code >
            {`console.log(calculateArea(5, 3)); // Output: 15`}
          </code>
          </pre>
        </div>
      </main>
    </div>
  );
};

export default Python_Applications;
