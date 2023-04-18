import React from 'react';

const Python_varibles = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-blue-500 text-white p-4">
        <h1 className="text-lg font-bold">Python Variables</h1>
      </nav>
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-bold mb-4">Python Variables</h2>
        <p className="mb-4">
          Python Variable is containers that store values. Python is not “statically typed”. We do not need to declare variables before using them or declare their type. A variable is created the moment we first assign a value to it. A Python variable is a name given to a memory location. It is the basic unit of storage in a program.
          Example of Variable in Python
          An Example of a Variable in Python is a representational name that serves as a pointer to an object. Once an object is assigned to a variable, it can be referred to by that name. In layman’s terms, we can say that Variable in Python is containers that store values.
          Here we have stored “factionitsolutions”  in a var which is variable, and when we call its name the stored information will get printed
        </p>
        <pre className="bg-gray-400 text-white p-3 rounded-lg mb-4 w-full overflow-auto">
          <code>Var = " factionitsolutions "<br />
            print(Var)<br /><br />
            OUTPUT<br />
            Factionitsolution<br />
            Variable assignment</code>
        </pre>
        <p className="mb-4">
          You can think of a variable as a name with a value attached. To create a variable, just assign a value.
          <br />To do assignment, use the equal sign (=).
        </p>
        <pre className="bg-gray-400 text-white p-3  rounded-lg mb-4 w-full overflow-auto">
          <code>x = 3</code>

        </pre>
        <h2 className="text-xl font-bold mb-4">Naming Variables Assignments in </h2>
        <p className="mb-4">
          You can read this as ‘x is assigned the value 3’. Once assigned, the variable can be used anywhere in the program.
        </p>
        <pre className="bg-gray-400 text-white p-3  rounded-lg mb-4 w-full overflow-auto">
          <code>print(x)</code></pre>

        <p className='mb-4'>If you use the REPL shell, it will output the value directly.</p>
        <pre className="bg-gray-400 text-white p-3  rounded-lg mb-4 w-full overflow-auto">
          <code>>>> x<br />
            3
          </code>
        </pre>

        <p className='mb-4'>You can change the value of x anywhere in the program.
        </p>
        <pre className="bg-gray-400 text-white p-3  rounded-lg mb-4 w-full overflow-auto">
          <code>x = 4
          </code>
        </pre>

        <p className='mb-4'>Then if you want to use x again, you’ll see the value has changed.
        </p>
        <pre className="bg-gray-400 text-white p-3  rounded-lg mb-4 w-full overflow-auto">
          <code>print(x)<br />
            4
          </code>
        </pre>
        <h2 className="text-xl font-bold mb-4">Multiple Assignments</h2>
        <p className="mb-4">We can assign one value to multiple variables on a single statement in the Python programming language. This is known as multiple assignments.
          Multiple assignments are also called tuple unpacking or iterable unpacking. In a single line of code, you can assign a value to multiple variables simultaneously. The use of parentheses is optional in multiple assignments.
          Multiple assignments are called "tuple-unpacking" because it is usually practiced with tuples. However, we can also use multiple assignments with some other iterable, not only tuples.
          <br />Example:</p>

        <pre className="bg-gray-400 text-white p-3  rounded-lg mb-4 w-full overflow-auto">
          <code>a, b = 100, 200<br /><br />

            OUTPUT:<br />
            print(a)<br />
            print(b)<br />
            100<br />
            200<br />

          </code>
        </pre>

      </main>
    </div>
  );
};

export default Python_varibles;
