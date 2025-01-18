import Markdown from 'react-markdown';
import { Post } from './Post';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

export const PostFull = () => {
  return (
    <div className="flex items-center justify-center mt-6 flex-col mb-4">
      <Post classes={'w-[1200px]'} />
      <Markdown className="w-[1200px] bg-white p-2 pt-4" remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus sed quaerat enim iste blanditiis quos aliquid
        voluptatum non doloribus ipsa numquam qui nihil dicta a cupiditate nam vitae deserunt voluptate, corrupti ipsam
        necessitatibus doloremque assumenda. Accusantium, illo quos. Unde dicta, mollitia atque architecto dolore qui
        quis nisi culpa aspernatur pariatur perspiciatis deserunt iste ipsa debitis consectetur libero vero perferendis.
        Minima facilis laudantium, sint libero voluptatem soluta consequuntur obcaecati consectetur ratione. Asperiores
        eos quas unde. Blanditiis, voluptatum cumque voluptas a sed, velit eos earum veritatis maxime provident facere
        aliquam saepe libero. Porro velit aperiam tempora nemo, pariatur commodi rem voluptatum repellendus veritatis.
        Voluptatibus deleniti laboriosam pariatur deserunt ut, dicta quam dolore voluptatum, quo architecto distinctio
        dolorum consequatur maxime voluptate exercitationem quas voluptatem eaque ipsam excepturi id ea enim inventore,
        praesentium nihil? Odio et atque quisquam aspernatur, sequi nisi modi tempore maxime placeat est, molestias
        pariatur in alias quam optio doloremque sapiente magnam a! Architecto dolore hic temporibus voluptas consectetur
        possimus nisi molestias, iusto delectus id veniam nulla, quibusdam distinctio commodi. Iste dolorum blanditiis
        quasi sit aut, impedit earum, debitis reprehenderit provident fuga error nobis autem, molestiae quo architecto
        sunt. Ab rerum fuga explicabo illo deleniti exercitationem quia modi earum molestias blanditiis!
      </Markdown>
    </div>
  );
};
