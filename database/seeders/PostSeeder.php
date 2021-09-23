<?php

namespace Database\Seeders;

use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Sequence;
use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        Post::factory(10)
            ->state(new Sequence(
                fn ($sequence) => [
                    'user_id' => User::all()->random()
                ],
            ))
            ->create();
    }
}
