import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, useForm } from '@inertiajs/inertia-react';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import Button from '@/Components/Button';
import ValidationErrors from '@/Components/ValidationErrors';

export default function Create(props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        content: ''
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('post.store'));
    };

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Post</h2>}
        >
            <Head title="Post Create" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <ValidationErrors errors={errors} />
                            <form onSubmit={submit}>
                                <div>
                                    <Label forInput="title" value="title" />
                                    <Input
                                        type="text"
                                        name="title"
                                        value={data.title}
                                        className="mt-1 block w-full"
                                        isFocused={true}
                                        handleChange={onHandleChange}
                                    />
                                </div>

                                <div>
                                    <Label forInput="content" value="content" />
                                    <Input
                                        type="text"
                                        name="content"
                                        value={data.content}
                                        className="mt-1 block w-full"
                                        handleChange={onHandleChange}
                                    />
                                </div>

                                <div className="flex items-center justify-end mt-4">
                                    <Button className="ml-4" processing={processing}>
                                        作成
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
