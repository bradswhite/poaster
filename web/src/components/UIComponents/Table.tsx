import { ReactNode } from 'react';

interface TableProps {
  headings: string[];
  dataRows: (ReactNode | string)[][];
}

const Table = ({ headings, dataRows }: TableProps) => {
  return (
    <div className='shadow-xl rounded-2xl overflow-y-hidden overflow-x-auto border border-1 border-gray-200 dark:border-gray-600'>
      <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded-lg p-4 md:w-full bg-gray-200 dark:bg-gray-900'>
        <thead className='text-xs text-gray-700 uppercase dark:text-gray-400'>
          <tr>
            {headings.map(text => (
              <th scope='col' className='px-6 py-3'>
                {text}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataRows.map((data, i) => {
            let rows = data.map((text, i) =>
              i === 0 ? (
                <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                  {text}
                </th>
              ) : (
                <td className='px-6 py-4'>
                  {text}
                </td>
              )
            );

            return i % 2 == 0 ? (
              <tr className='bg-gray-50 border-b dark:bg-gray-700 border-gray-200 dark:border-gray-700'>
                {rows}
              </tr>
            ) : (
              <tr className='border-b bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700'>
                {rows}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
