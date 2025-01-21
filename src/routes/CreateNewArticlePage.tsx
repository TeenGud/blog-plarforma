import { MouseEventHandler, useState } from 'react';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export const CreateNewArticlePage = () => {
  const [numberOfTags, setNumberOfTags] = useState(1);
  const [tags, setTags] = useState([
    <div className="flex gap-3 mr-3" key={numberOfTags}>
      <Input w={300} h={40} placeholder="Tag" id={`tag${numberOfTags}`} type="text" />
      <Button classes="text-xl text-red-500 border-red-500" text="Delete" w={160} h={40} />
    </div>,
  ]);

  const handleAddTag = (event: Event) => {
    event.preventDefault();
    if (numberOfTags > 5) {
      return;
    }
    setNumberOfTags((prev) => prev + 1);
    setTags((prevTags) => [
      ...prevTags,
      <div className="flex gap-3 mr-3" key={numberOfTags + 1}>
        <Input w={300} h={40} placeholder="Tag" id={`tag${numberOfTags + 1}`} type="text" />
        <Button classes="text-xl text-red-500 border-red-500" text="Delete" w={160} h={40} />
      </div>,
    ]);
  };

  return (
    <div className="bg-white shadow-sm w-[938px] py-12 px-8 rounded-md mx-auto mt-6 mb-9">
      <h2 className="text-center font-medium text-xl">Create new article</h2>
      <form className="mt-3">
        <div>
          <label htmlFor="title">Title</label>
          <Input w={874} h={40} placeholder="Title" id="title" type="text" />
        </div>
        <div className="mt-4">
          <label htmlFor="description">Short description</label>
          <Input w={874} h={40} placeholder="Description" id="description" type="text" />
        </div>
        <div className="mt-4">
          <label htmlFor="text">Text</label>
          <textarea
            className="w-[874px] h-[168px] rounded border-[1px] p-2 placeholder:text-sm placeholder:text-gray-400"
            placeholder="Text"
            id="text"
            name="text"
          />
        </div>
        <div className="flex flex-col gap-4">
          <span>Tags</span>
          <div className="flex justify-start items-start">
            <div className="flex flex-col gap-4">{tags}</div>
            <Button
              onClick={handleAddTag as unknown as MouseEventHandler<HTMLButtonElement> | undefined}
              classes="text-xl text-blue-500 border-blue-500 py-[5px]"
              text="Add tag"
              w={160}
              h={40}
            />
          </div>
        </div>
        <Button classes="text-xl bg-blue-600 text-md text-white mt-6 rounded-md" w={320} h={50} text="Send" />
      </form>
    </div>
  );
};
