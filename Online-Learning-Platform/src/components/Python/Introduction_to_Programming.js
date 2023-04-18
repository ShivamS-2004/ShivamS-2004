import React from 'react';
import logo from "../Images/Compiler.png"

const Introduction_to_Programming = () => {


  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-blue-500 text-white p-4">
        <h1 className="text-lg font-bold">Introduction to Programming</h1>

      </nav>
      <main className="container mx-auto px-4 py-8">

        <h2 className="text-xl font-bold my-4">Programming Languages</h2>
        <p className="m-4">
          A programming language is a computer language that is used by programmers (developers)
          to communicate with computers. It is a set of instructions written in any specific language ( C,
          C++, Java, Python) to perform a specific task.<br />
          A programming language is mainly used to develop desktop applications, websites, and
          mobile applications.
        </p>

        <div className='my-4'>
          <h2 className="text-xl font-bold my-4">Types of programming language </h2>
          <h2 className="text-xl font-bold my-4"> A. Low-level programming Language </h2>
          <p className="m-4">
            Low-level language is machine-dependent (0s and 1s) programming language. The processor
            runs low- level programs directly without the need of a compiler or interpreter, so the programs
            written in low-level language can be run very fast.<br />
            Low-level language is further divided into two parts –
          </p>

          <div className='my-4'>
            <h6 className="text-xl font-bold my-4">1. Machine Language</h6>
            <p className="m-4">Machine language is a type of low-level programming language. It is also called as machine
              code or object code. Machine language is easier to read because it is normally displayed in
              binary or hexadecimal form (base 16) form. It does not require a translator to convert the
              programs because computers directly understand the machine language programs.<br />
              The advantage of machine language is that it helps the programmer to execute the
              programs faster than the high-level programming language.
            </p>

            <h6 className="text-xl font-bold my-4">2. Assembly Language</h6>
            <p className="m-4">Assembly language (ASM) is also a type of low-level programming language that is
              designed for specific processors. It represents the set of instructions in a symbolic and
              human-understandable form. It uses an assembler to convert the assembly language to
              machine language.<br />
              The advantage of assembly language is that it requires less memory and less execution time
              to execute a program.
            </p>
          </div>
        </div>
        <div className='my-4'>
          <h2 className="text-xl font-bold my-4">B. High-level programming language</h2>
          <p className="m-4">
            High-level programming language (HLL) is designed for developing user-friendly software
            programs and websites. This programming language requires a compiler or interpreter to
            translate the program into machine language (execute the program).<br />
            The main advantage of a high-level language is that it is easy to read, write, and maintain.
            High-level programming language includes Python, Java, JavaScript, PHP, C#, C++,
            Objective C, Cobol, Perl, Pascal, LISP, FORTRAN, and Swift programming language.
            <br></br>A high-level language is further divided into three parts -
          </p>

          <p className="font-medium my-4">1. Procedural Oriented programming language</p>
          <p className="m-4">Procedural Oriented Programming (POP) language is derived from structured programming
            and based upon the procedure call concept. It divides a program into small procedures
            called routines or functions.<br />
            Procedural Oriented programming language is used by a software programmer to create a
            program that can be accomplished by using a programming editor like IDE, Adobe
            Dreamweaver, or Microsoft Visual Studio.<br />
            The advantage of POP language is that it helps programmers to easily track the program flow
            and code Scan be reused in different parts of the program.
            Example: C, FORTRAN, Basic, Pascal, etc.</p>

          <p className="font-medium my-4">2. Object-Oriented Programming language </p>
          <p className="m-4">Object-Oriented Programming (OOP) language is based upon the objects. In
            this programming language, programs are divided into small parts called objects. It is used to
            implement real-world entities like inheritance, polymorphism, abstraction, etc in the program
            to makes the program reusable, efficient, and easy-to-use. The main advantage
            of object-oriented programming is that OOP is faster and easier to execute, maintain, modify,
            as well as debug.<br />
            Example: C++, Java, Python, C# etc. </p>
        </div>
        <div className='my-4'>
          <h2 className="text-xl font-bold my-4">C. Translator</h2>
          <p className="m-4">
            A program written in high-level language is called as source code. To convert the source
            code into machine code, translators are needed.
            A translator takes a program written in source language as input and converts it into a
            program in target language as output.<br />
            It also detects and reports the error during translation.
          </p>

          <p className="font-medium my-4">Types of Translator</p>
          <p className="m-4">Assembler<br />
            Compiler<br />
            Interpreter
          </p>

          <p className="font-medium my-4">1. Assembler</p>
          <p className="m-4">The Assembler is a Software that converts an assembly language code to machine code. It takes
            basic Computer commands and converts them into Binary Code that Computer’s Processor can
            use to perform its Basic Operations. These instructions are assembler language or assembly
            language.
          </p>

          <p className="font-medium m-4">Types of Assembler</p>
          <p className="m-4">Assemblers generate instruction. On the basis of a number of phases used to convert to
            machine code, assemblers have two types:
          </p>
          <ul className=" m-4">
            <li className='font-medium'>1. Onepass Assembler</li>
            <li className=" mx-4">These assemblers perform the whole conversion of assembly code to machine code in one go</li>
            <li className='font-medium'>2. Multi-Pass/Two-Pass Assembler</li>
            <li className=" mx-4">These assemblers first process the assembly code and store values in the opcode
              table and symbol table. And then in the second step, they generate the machine code using
              these tables. </li>
          </ul>

          <p className="font-medium my-4">2. Compiler</p>
          <p className="m-4">A compiler is a translator that converts the high-level language into the machine language.<br />
            High-level language is written by a developer and machine language can be understood by
            the processor.<br />
            Compiler is used to show errors to the programmer.<br />
            The main purpose of compiler is to change the code written in one language without changing
            the meaning of the program.<br />
            When you execute a program which is written in HLL programming language then it executes
            into two parts.<br />
            In the first part, the source program compiled and translated into the object program (low level
            language).<br />
            In the second part, object program translated into the target program through the assembler.
          </p>
          <img src={logo} />
          <p className="font-medium my-4">3. Interpreter</p>
          <p className="m-4">An interpreter is a program that directly executes the instructions in a high-level language,
            without converting it into machine code. In programming, we can execute a program in two
            ways. Firstly, through compilation and secondly, through an interpreter. The common way is to
            use a compiler.
          </p>


          <ul className=" m-4">
            <li className='font-medium'>Strategies of an Interpreter</li>
            <li className="font-medium mx-4">It can work in three ways:</li>
            <li className=" mx-4">i. Execute the source code directly and produce the output.</li>
            <li className=" mx-4">ii. Translate the source code in some intermediate code and then execute this code.</li>
            <li className=" mx-4">iii. Using an internal compiler to produce a precompiled code. Then, execute this precompiled code. </li>
          </ul>
          <div>
            <p className="font-medium my-4">Difference between Compiler and Interpreter – </p>

            <div className="flex justify-evenly">
              <div className='flex-1' ><ul><li class=" font-bold flex justify-center items-center"> Compiler</li>
                <li> A compiler is a program that converts the entire
                  source code of a programming language into
                  executable machine code for a CPU.</li>
                <li>  The compiler takes a large amount of time to
                  analyse the entire source code but the overall
                  execution time of the program is comparatively
                  faster.</li>
                <li>    The compiler generates the error message only
                  after scanning the whole program, so debugging
                  is comparatively hard as the error can be present
                  anywhere in the program.</li>
                <li> The compiler requires a lot of memory for
                  generating object codes.</li>
                <li>  Generates intermediate object code.</li>
                <li>For Security purpose compiler is more useful.</li>
                <li>Examples: C, C++, Java</li>
              </ul></div>
              <div  className='flex-1'><ul><li class="font-bold flex justify-center items-center">Interpreter</li>
                <li>An interpreter takes a source
                  program and runs it line by line,
                  translating each line as it comes to it.</li>
                <li>An interpreter takes less amount of
                  time to analyse the source code but
                  the overall execution time of the
                  program is slower.</li>
                <li>Its Debugging is easier as it
                  continues translating the program
                  until the error is met.
                </li>
                <li>It requires less memory than a
                  compiler because no object code is
                  generated.</li>
                <li>No intermediate object code is
                  generated.</li>
                <li> The interpreter is a little vulnerable
                  in case of security.
                </li>
                <li>Examples: Python, Perl, JavaScript</li>
              </ul></div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default Introduction_to_Programming;
