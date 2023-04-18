import React from 'react';

const Recursion = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-blue-500 text-white p-4">
        <h1 className="text-lg font-bold">Recursions</h1>
      </nav>
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-bold mb-4">What are Recursions in ?</h2>
        <p className="mb-4">
          Recursions are containers for storing data values in . A Recursion is declared with the <code>var</code>, <code>let</code>, or <code>const</code> keyword, followed by a Recursion name. The value of the Recursion can be assigned using the assignment operator (<code>=</code>).
        </p>
        <h2 className="text-xl font-bold mb-4">Declaring Recursions in </h2>
        <p className="mb-4">
          In , Recursions can be declared using the <code>var</code>, <code>let</code>, or <code>const</code> keyword. The <code>var</code> keyword was traditionally used to declare Recursions, but <code>let</code> and <code>const</code> were introduced in ES6 and are now the preferred way to declare Recursions.
        </p>
        <p className="mb-4">
          <code>var</code> is function-scoped, meaning that a Recursion declared with <code>var</code> is only accessible within the function in which it is declared, or globally if declared outside a function. <code>let</code> and <code>const</code> are block-scoped, meaning that a Recursion declared with <code>let</code> or <code>const</code> is only accessible within the block in which it is declared.
        </p>
        <h2 className="text-xl font-bold mb-4">Assigning values to Recursions</h2>
        <p className="mb-4">
          In , values can be assigned to Recursions using the assignment operator (<code>=</code>). For example:
        </p>
        <pre className="bg-gray-400 text-white p-3 rounded-lg mb-4 w-full overflow-auto">
          <code>var x = 10; // declares a Recursion x and assigns the value 10</code>
        </pre>
        <p className="mb-4">
          You can also assign the value of one Recursion to another Recursion, like this:
        </p>
        <pre className="bg-gray-400 text-white p-3  rounded-lg mb-4 w-full overflow-auto">
          <code>var x = 10;<br/>var y = x; // assigns the value of x to y</code>
        </pre>
        <h2 className="text-xl font-bold mb-4">Naming Recursions in </h2>
        <p className="mb-4">
          Recursion names in  can contain letters, digits, underscores, and dollar signs. They must begin with a letter, underscore, or dollar sign. Recursion names are case-sensitive.
        </p>
      </main>
    </div>
  );
};

export default Recursion;
