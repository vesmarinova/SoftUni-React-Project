import { Children } from 'react';


export default function Container ({children }) {
    return (
        <div className="mx-auto w-full max-w-7xl">
          {children }
        </div>
    );
}