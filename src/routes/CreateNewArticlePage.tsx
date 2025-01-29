import { MouseEventHandler, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Tag } from '../components/Tag';
import { Dispatch } from '@reduxjs/toolkit';
import { handleDeleteTag, tags } from '../tools/handleEvents/HandleTags/handleDeleteTag';
import { createAnArticle } from '../tools/fetch/createAnArticle';

export const CreateNewArticlePage = () => {
  let tagId = uuidv4();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [tagsText, setTagsText] = useState({});
  const [tags, setTags] = useState([
    {
      id: tagId,
      tag: (

        <Tag
          tagId={tagId}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          handleDeleteTag={(e) => handleDeleteTag(e, setTags as (tags: tags) => void, setTagsText)} 
          setTagsText={setTagsText as Dispatch<any>}
        />
      ),
    },
  ]);

  const handleSubmitFull = handleSubmit(async (dataForm) => {
    const newArticle = {
      article: {
        title: dataForm.title,
        description: dataForm.description,
        body: dataForm.text,
        tagList: Object.values(tagsText) as string[],
      },
    };
    console.log(newArticle);
    try {
      const data = await createAnArticle(newArticle);
      console.log(data);
      if (data?.article) {
        navigate('/');
        // return toast.success("Account created! Now log in")
      } else if (data?.errors) {
        let errorMessage = '';
        for (const error in data.errors) {
          errorMessage += `${error} ${data.errors[error]}\n`;
        }
        return toast.error(errorMessage);
      }
    } catch (error) {
      console.log(error);
    }
  });

  const handleAddTag = (event: Event) => {
    event.preventDefault();
    if (tags.length > 5) {
      return;
    }
    tagId = uuidv4();
    setTags([
      ...tags,
      {
        id: tagId,
        tag: (
          <Tag
            tagId={tagId}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            handleDeleteTag={(e) => handleDeleteTag(e, setTags as (tags: tags) => void, setTagsText)} 
            setTagsText={setTagsText as Dispatch<any>}
          />
        ),
      },
    ]);
  };

  return (
    <div className="bg-white shadow-sm w-[938px] py-12 px-8 rounded-md mx-auto mt-6 mb-9">
      <h2 className="text-center font-medium text-xl">Create new article</h2>
      <form className="mt-3" onSubmit={handleSubmitFull}>
        <div className="relative flex flex-col">
          <label htmlFor="title">Title</label>
          <Input
            w={874}
            h={40}
            placeholder="Title"
            id="title"
            type="text"
            register={register}
            registerArgs={{
              required: 'This field is required',
              maxLength: { value: 40, message: 'Your title needs to be less than 40 characters' },
            }}
            border={Boolean(errors.title?.message)}
          />
          <span className="text-sm text-red-500 absolute top-[70px]">{errors.title?.message as string}</span>
        </div>
        <div className="mt-8 relative flex flex-col">
          <label htmlFor="description">Short description</label>
          <Input
            w={874}
            h={40}
            placeholder="Description"
            id="description"
            type="text"
            register={register}
            registerArgs={{
              required: 'This field is required',
              minLength: { value: 3, message: 'Your description needs to be at least 3 characters' },
              maxLength: { value: 80, message: 'Your description needs to be less than 80 characters' },
            }}
            border={Boolean(errors.description?.message)}
          />
          <span className="text-sm text-red-500 absolute top-[70px]">{errors.description?.message as string}</span>
        </div>
        <div className="mt-8 relative flex flex-col">
          <label htmlFor="text">Text</label>
          <textarea
            className={`w-[874px] h-[168px] rounded border-[1px] p-2 placeholder:text-sm placeholder:text-gray-400 ${errors.text?.message ? 'border-red-600' : ''}`}
            placeholder="Text"
            {...register('text', {
              required: 'This field is required',
              minLength: { value: 3, message: 'Your text needs to be at least 3 characters' },
            })}
            id="text"
            name="text"
          />
          <span className="text-sm text-red-500 absolute top-[196px]">{errors.text?.message as string}</span>
        </div>
        <div className="flex flex-col gap-4 mt-8">
          <span>Tags</span>
          <div className="flex justify-start items-start">
            <div className="flex flex-col gap-4">
              {tags.map((tag) => (
                <div key={tag.id}>{tag.tag}</div>
              ))}
            </div>
            <Button
              onClick={handleAddTag as unknown as MouseEventHandler<HTMLButtonElement> | undefined}
              classes="text-xl text-blue-500 border-blue-500 py-[5px]"
              text="Add tag"
              w={160}
              h={40}
            />
          </div>
        </div>
        <Button
          type="submit"
          classes="text-xl bg-blue-600 text-md text-white mt-6 rounded-md"
          w={320}
          h={50}
          text="Send"
        />
      </form>
    </div>
  );
};
