// ダイナミックルーティングで受け取るパラメータの型の定義は以下の形式となる

import { users } from "@/app/lib/users";
import Link from "next/link";
import { notFound } from "next/navigation";

// params：決まった文言　userId："users/[userId]/page.tsx"の括弧内で指定した名前　string：必ず型はstring
interface Props {
    params: { userId: string };
}

export default function UserPage(props: Props) {
    // データの取得
    const user = users[Number(props.params.userId)];
    if (user === undefined) {
        // notFoundを呼ぶと既存のエラー画面を表示できる
        notFound();
    }

    return (
      <>
        <h1 className="text-lg border-b pb-1 mb-1">
            {user.name}
        </h1>
        <p>{user.prof}</p>
        <p className="mt-4">
            <Link href="/" className="text-blue-500 hover:text-blue-700">Go back</Link>
        </p>
      </>
    );
  }
  