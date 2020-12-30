import React, { memo } from 'react';


export const TrackInput = memo(function TrackInput({ value, name, inputChangeHandler }) {
    console.log('rendered')
    let classes = 'form-control input-group-text mr-3';
    let placeHolder = name;
    if (name === 'album_name') {
        classes = 'form-control input-group-text';
    }

    if (name === 'trackTitle') {
        placeHolder = 'Song title...';
    }

    return (
        <div className="input-group-prepend">
            <input type='text'
                   className={classes}
                   value={value}
                   name={name}
                   onChange={inputChangeHandler}
                   placeholder={placeHolder}/>
        </div>
    );
});
