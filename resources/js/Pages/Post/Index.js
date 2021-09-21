import React from 'react';
import Button from '@/Components/Button';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link } from '@inertiajs/inertia-react';

export default function Index(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Post</h2>}
        >
            <Head title="Post Index" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div>
                                <Link href={route('post.create')}>
                                    <Button type="button">新規作成</Button>
                                </Link>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>タイトル</th>
                                        <th>コンテンツ</th>
                                        <th>投稿者</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.posts.map((post) => {
                                        console.log(post)
                                        return (
                                            <tr key={post.id}>
                                                <td className="border px-4 py-2">
                                                    {post.title}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {post.content}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {post.user_id}
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
