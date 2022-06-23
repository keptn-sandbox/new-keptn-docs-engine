import React, { useState, useEffect, Fragment, memo } from 'react';
import clsx from 'clsx';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { useHistory } from 'react-router-dom';
import { useAllDocsData } from '@theme/hooks/useDocs';
import { CONTEXTS } from '../utils/constants';
import PropTypes from 'prop-types';

const getContext = (id, section) =>
  CONTEXTS[section].find((context) => context.id === id);

export const getCurrentPageInfo = () => {
  return window.location.pathname.split('/').slice(1);
};

const pathExists = (path, data) => {
  return data.docs.some((doc) => doc.path === path);
};

const ContextSwitcher = ({
  section,
  className,
  mobile,
  selectorOnly,
  disabled,
}) => {
  const contexts = CONTEXTS[section];
  const [context, setContext] = useState(CONTEXTS[section][0]);
  const data = useAllDocsData();
  const history = useHistory();

  const handleChange = (newValue) => {
    setContext(newValue);

    const [, ...docPath] = getCurrentPageInfo();

    const newDoc = newValue.id;

    let path = `/${newDoc}/${docPath.join('/')}`;

    const lastVersion = data[newDoc].versions.find(
      (version) => version.isLast === true
    );

    if (pathExists(path, lastVersion)) {
      // navigate to same document in the last version
      // append hash to path for navigating to anchor tags, if they exist
      if (window.location.hash) path += window.location.hash;
      history.push(path);
    } else {
      // navigate to the main doc of the last version.
      const { mainDocId } = lastVersion;
      history.push(`/${newDoc}/${mainDocId}`);
    }
  };

  useEffect(() => {
    const [doc] = getCurrentPageInfo();

    const currContext = getContext(doc, section);
    const context = CONTEXTS[section][0];
    if (currContext && currContext.id !== context.id) {
      setContext(currContext);
    } else if (
      window.location.href.indexOf(context.id) === -1 &&
      !selectorOnly
    ) {
      handleChange(context);
    }
  }, []);

  return (
    <Listbox
      value={context}
      onChange={handleChange}
      className={clsx('relative', className)}
    >
      <div className="relative mt-1">
        <Listbox.Button className="relative flex h-12 w-full cursor-pointer items-center rounded-lg border-none bg-background-100 py-2 pl-3 pr-10 text-left outline-none focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
          <context.icon
            className="mr-2 h-8"
            aria-hidden="true"
            alt={context.name}
          />
          <span className="lv0_link block truncate text-text">
            {mobile ? context.name : `${context.name.substring(0, 12)}`}
          </span>
          {!disabled && (
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <SelectorIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          )}
        </Listbox.Button>
        {!disabled && (
          <div className="relative w-full">
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full list-none overflow-auto rounded-md bg-background-100 p-0 py-2 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {contexts.map((context) => (
                  <Listbox.Option
                    key={context.id}
                    disabled={context.disabled}
                    className={({ active }) =>
                      clsx(
                        'relative select-none py-2 px-4',
                        active && 'bg-background-200',
                        !context.disabled
                          ? 'cursor-pointer'
                          : 'bg-background-300'
                      )
                    }
                    value={context}
                  >
                    {({ selected }) => (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <context.icon
                            className="mr-2 h-8"
                            alt={context.name}
                            aria-hidden="true"
                          />
                          <span
                            className={clsx(
                              'block truncate',
                              selected ? 'font-medium' : 'font-normal'
                            )}
                          >
                            {context.name}
                          </span>
                        </div>
                        {selected ? (
                          <span className="left-0 flex items-center pl-3 text-blue-600">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        )}
      </div>
    </Listbox>
  );
};

ContextSwitcher.propTypes = {
  className: PropTypes.string,
  section: PropTypes.string,
  mobile: PropTypes.bool,
  selectorOnly: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default memo(ContextSwitcher);
