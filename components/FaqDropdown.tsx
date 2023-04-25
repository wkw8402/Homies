import classNames from 'classnames';
import React, { useRef, useState } from 'react';

export default function FaqDropdown({ question, answer, expanded = false }) {
  const [open, setOpen] = useState(expanded);
  const scrollRef = useRef(null);

  return (
    <div className="w-full px-5 py-6 bg-white sm:px-12 sm:py-8 rounded-3xl faq">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full text-lg sm:text-xl group"
      >
        <span className="font-medium text-left text-purple-900 duration-300 ease-in-out group-hover:text-purple-600">
          {question}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={classNames(
            'flex-shrink-0 w-5 h-6 ml-3 text-purple-700 duration-300 ease-in-out sm:w-6 sm:h-6 sm:ml-6 group-hover:text-purple-600',
            open ? 'rotate-180' : ''
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        ref={scrollRef}
        className={classNames(
          'relative overflow-hidden duration-700 max-h-0',
          open ? 'max-h-full' : ''
        )}
        style={{
          maxHeight: open ? scrollRef.current?.scrollHeight : 0,
        }}
      >
        <div className="mt-3 text-base leading-relaxed text-purple-800 opacity-70 sm:text-lg">
          {answer}
        </div>
      </div>
    </div>
  );
}
