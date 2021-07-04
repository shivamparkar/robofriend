import React from 'React';

const SearchBox = ({ searchfield, searchchange }) =>{
  return(
    <div className = 'pa2'>
      <input
       className ="pa3 bs b--green bg-lighttest-blue"
       type ="search"
       placeholder="search robots"
      />
    </div>
  );
}

export default SearchBox;
