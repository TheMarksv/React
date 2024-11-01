import React from 'react';

function tasks({task, onRemove}) {
    return (
        <div className='task'>
            <p>{task}</p>
            <button onClick={onRemove}>Remover </button>
        </div>
    );
}

export default Task;
