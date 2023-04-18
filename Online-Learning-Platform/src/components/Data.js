import Layout from './CSS/Layout';
import Selectors from './CSS/Selectors';
import Intro from './HTML/Intro';
import Tags from './HTML/Tags';
import Introduction_to_Programming from './Python/Introduction_to_Programming';
import Python_Introduction from './Python/Python_Introduction';
import Python_Features from './Python/Python_Features';
import Python_History from './Python/Python_History';
import Python_Applications from './Python/Python_Applications';
import Python_in_Industries from './Python/Python_in_Industries';
import Python_IDE from './Python/Python_IDE';
import Python_Installation from './Python/Python_Installation';
import Python_Internal from './Python/Python_Internal';
import Python_Syntax from './Python/Python_Syntax';
import Python_Tokens from './Python/Python_Tokens';
import Python_Operators from './Python/Python_Operators';
import Python_Variables  from './Python/Python_Variables';
import Structure_Python_Program  from './Python/Structure_Python_Program';
import First_Python_Program  from './Python/First_Python_Program';
import Program_Arithmetic_Operators  from './Python/Program_Arithmetic_Operators';
import Datatypes from './Python/Datatypes';
import Mutable_Immutable_Datatype from './Python/Mutable_Immutable_Datatype';
import Python_Typecasting  from './Python/Python_Typecasting';
import Python_Statement_Flow_Control from './Python/Python_Statement_Flow_Control';
import Python_Strings from './Python/Python_Strings';
import Python_Lists from './Python/Python_Lists';
import Python_Tuples from './Python/Python_Tuples';
import Python_Dictionary from './Python/Python_Dictionary';
import Python_Sets from './Python/Python_Sets';
import Python_Sorting_Techniques from './Python/Python_Sorting_Techniques';
import Python_Functions from './Python/Python_Functions';
import Recursion from './Python/Recursion';
import Python_Modules from './Python/Python_Modules';
import Python_Packages from './Python/Python_Packages';
import Python_Libraries from './Python/Python_Libraries';
import Python_Exception_Handling from './Python/Python_Exception_Handling';
import Python_File_Handling  from './Python/Python_File_Handling';
import Python_OOPs from './Python/Python_OOPs';
import Python_Data_Structures from './Python/Python_Data_Structures';





const courses = [
    {
      id: 1,
      name: 'HTML',
      topics: ['Introduction', 'Tags'],
      content: [
        <Intro />,
        <Tags />,
      ],
    },
    {
        id: 2,
        name: 'CSS',
        topics: ['Layout', 'Selectors'],
        content: [
          <Layout />,
          <Selectors />,
        ],
      },
      {
        id: 3,
        name: 'Python',
        topics: ['Introduction to Programming',
        'Python Introduction',
        'Python Features',
        'Python History',
        'Python Applications',
        'Python in Industries',
        'Python IDE',
        'Python Installation and Setup on Windows',
        'Python Internal Working',
        'Python Syntax',
        'Python Tokens',
        'Python Operators',
        'Python Variables' ,
        'Structure Python Program' ,
        'First Python Program' ,
        'Program Arithmetic Operators' ,
        'Datatypes',
        'Mutable Immutable Datatype',
        'Python Typecasting' ,
        'Python Statement Flow Control',
        'Python Strings',
        'Python Lists',
        'Python Tuples',
        'Python Dictionary',
        'Python Sets',
        'Python Sorting Techniques',
        'Python Functions',
        'Recursion',
        'Python Modules',
        'Python Packages',
        'Python Libraries',
        'Python Exception Handling',
        'Python File Handling' ,
        'Python Data Structures' ,       
        'Python OOPs'],
        content: [
        <Introduction_to_Programming/>,
        <Python_Introduction/>,
        <Python_Features/>,
        <Python_History/>,
        <Python_Applications/>,
        <Python_in_Industries/>,
        <Python_IDE/>,
        <Python_Installation/>,
        <Python_Internal/>,
        <Python_Syntax/>,
        <Python_Tokens/>,
        <Python_Operators/>,
        <Python_Variables />,
        <Structure_Python_Program />,
        <First_Python_Program />,
        <Program_Arithmetic_Operators />,
        <Datatypes/>,
        <Mutable_Immutable_Datatype/>,
        <Python_Typecasting />,
        <Python_Statement_Flow_Control/>,
        <Python_Strings/>,
        <Python_Lists/>,
        <Python_Tuples/>,
        <Python_Dictionary/>,
        <Python_Sets/>,
        <Python_Sorting_Techniques/>,
        <Python_Functions/>,
        <Recursion/>,
        <Python_Modules/>,
        <Python_Packages/>,
        <Python_Libraries/>,
        <Python_Exception_Handling/>,
        <Python_File_Handling />,
        <Python_OOPs/>,
        <Python_Data_Structures/> ,

        ],
      },
  ];

export default courses;