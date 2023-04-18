import React from 'react';

const Python_Statement_Flow_Control = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-blue-500 text-white p-4">
        <h1 className="text-lg font-bold"> Python_Statement_Flow_Controls</h1>
      </nav>
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-bold mb-4">What are Python_Statement_Flow_Controls in ?</h2>
        <p className="mb-4">
          Python_Statement_Flow_Controls are containers for storing data values in . A Python_Statement_Flow_Control is declared with the <code>var</code>, <code>let</code>, or <code>const</code> keyword, followed by a Python_Statement_Flow_Control name. The value of the Python_Statement_Flow_Control can be assigned using the assignment operator (<code>=</code>).
        </p>
        <h2 className="text-xl font-bold mb-4">Declaring Python_Statement_Flow_Controls in </h2>
        <p className="mb-4">
          In , Python_Statement_Flow_Controls can be declared using the <code>var</code>, <code>let</code>, or <code>const</code> keyword. The <code>var</code> keyword was traditionally used to declare Python_Statement_Flow_Controls, but <code>let</code> and <code>const</code> were introduced in ES6 and are now the preferred way to declare Python_Statement_Flow_Controls.
        </p>
        <p className="mb-4">
          <code>var</code> is function-scoped, meaning that a Python_Statement_Flow_Control declared with <code>var</code> is only accessible within the function in which it is declared, or globally if declared outside a function. <code>let</code> and <code>const</code> are block-scoped, meaning that a Python_Statement_Flow_Control declared with <code>let</code> or <code>const</code> is only accessible within the block in which it is declared.
        </p>
        <h2 className="text-xl font-bold mb-4">Assigning values to Python_Statement_Flow_Controls</h2>
        <p className="mb-4">
          In , values can be assigned to Python_Statement_Flow_Controls using the assignment operator (<code>=</code>). For example:
        </p>
        <pre className="bg-gray-400 text-white p-3 rounded-lg mb-4 w-full overflow-auto">
          <code>var x = 10; // declares a Python_Statement_Flow_Control x and assigns the value 10</code>
        </pre>
        <p className="mb-4">
          You can also assign the value of one Python_Statement_Flow_Control to another Python_Statement_Flow_Control, like this:
        </p>
        <pre className="bg-gray-400 text-white p-3  rounded-lg mb-4 w-full overflow-auto">
          <code>var x = 10;<br/>var y = x; // assigns the value of x to y</code>
        </pre>
        <h2 className="text-xl font-bold mb-4">Naming Python_Statement_Flow_Controls in </h2>
        <p className="mb-4">
          Python_Statement_Flow_Control names in  can contain letters, digits, underscores, and dollar signs. They must begin with a letter, underscore, or dollar sign. Python_Statement_Flow_Control names are case-sensitive.
        </p>
      </main>
    </div>
  );
};

export default Python_Statement_Flow_Control;
