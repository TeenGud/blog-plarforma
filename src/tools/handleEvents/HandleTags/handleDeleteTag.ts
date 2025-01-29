import { MouseEvent, ReactNode } from 'react';

export type tags = (tags: [{ id: string; tag: ReactNode }]) => void;
type tagsText = (tags: { id: string }) => void;

export const handleDeleteTag = (
  e: MouseEvent<HTMLButtonElement, MouseEvent>,
  setTags: (tags: tags) => void,
  setTagsText: (tagsText: tagsText) => void
) => {
  const tagIdFromButton = e?.target?.getAttribute('data-key');
  console.log(tagIdFromButton);
  setTags((tags) => tags.filter((tag) => tag.id !== tagIdFromButton));
  setTagsText((prevTagsText) => {
    const entries = Object.entries(prevTagsText);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return Object.fromEntries(entries.filter(([key, _]) => key !== tagIdFromButton));
  });
};
