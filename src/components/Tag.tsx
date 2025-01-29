import { MouseEventHandler, SetStateAction, useState } from 'react';
import { Button } from './Button';
import { Input } from './Input';
import { Dispatch } from '@reduxjs/toolkit';

interface TagInterface {
  tagId: string;
  handleDeleteTag: MouseEventHandler<HTMLButtonElement>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setTagsText: Dispatch<SetStateAction<any>>;
  text?: string;
}

export const Tag = ({ tagId, handleDeleteTag, setTagsText, text }: TagInterface) => {
  const [value, setValue] = useState(text ? text : '');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setTagsText((prevTags: any) => ({ ...prevTags, [tagId]: value }));
  return (
    <div className="flex gap-3 mr-3">
      <Input
        w={300}
        h={40}
        placeholder="Tag"
        id={`tag${tagId}`}
        type="text"
        value={value}
        setValue={setValue}
        tagId={tagId}
      />
      <Button
        number={tagId}
        onClick={handleDeleteTag}
        type="button"
        classes="text-xl text-red-500 border-red-500"
        text="Delete"
        w={160}
        h={40}
      />
    </div>
  );
};
