<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'content',
        'user_id'
    ];

    public function user() {
        return $this->belongsTo(User::class);
    }

    static function getFullData() {
        return Post::
                leftjoin('users', 'posts.user_id', '=', 'users.id')
                ->select([
                    'posts.*',
                    'users.name as author',
                ]);
    }
}
