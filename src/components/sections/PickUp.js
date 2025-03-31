import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer'; 

import blogThumneil from '../../assets/images/Overview/会社LOGOvisual.webp';

const Pickup = () => {
    const [posts, setPosts] = useState([]);
    const [pickUpRef, pickUpInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        const fetchPickupPosts = async () => {
            try {
                // まずカテゴリー一覧を取得してpick upカテゴリーのIDを見つける
                const categoryRes = await fetch(
                    'https://earu-first.com/Blog/wp-json/wp/v2/categories?search=pick up'
                );
                if (!categoryRes.ok) {
                    throw new Error('Failed to fetch categories');
                }
                const categories = await categoryRes.json();
                const pickupCategoryId = categories[0]?.id;

                let postsRes;
                if (pickupCategoryId) {
                    // pick upカテゴリーの最新の投稿5件を取得
                    postsRes = await fetch(
                        `https://earu-first.com/Blog/wp-json/wp/v2/posts?_embed&per_page=5&categories=${pickupCategoryId}`
                    );
                } else {
                    // pick upカテゴリーが見つからない場合は、最新の投稿5件を取得
                    console.warn('Pick up category not found. Fetching latest posts instead.');
                    postsRes = await fetch(
                        'https://earu-first.com/Blog/wp-json/wp/v2/posts?_embed&per_page=5'
                    );
                }

                if (!postsRes.ok) {
                    throw new Error('Failed to fetch posts');
                }
                const data = await postsRes.json();
                setPosts(data);
            } catch (error) {
                console.error('Error fetching pickup posts:', error);
                // エラーが発生した場合は空の配列をセット
                setPosts([]);
            }
        };

        fetchPickupPosts();
    }, []);

    // アイキャッチ画像URLを取得するヘルパー関数
    const getFeaturedImage = (post) => {
        if (
            post?._embedded?.['wp:featuredmedia']?.[0]?.source_url
        ) {
            return post._embedded['wp:featuredmedia'][0].source_url;
        }
        return blogThumneil;
    };

    // カテゴリー名を取得するヘルパー関数
    const getCategories = (post) => {
        if (
            post._embedded &&
            post._embedded['wp:term'] &&
            post._embedded['wp:term'][0]
        ) {
            return post._embedded['wp:term'][0].map((cat) => cat.name)[0];
        }
        return '';
    };
    
    return (
        <div className="pickup-container">
            <h2 className="pickup-title">Pickup</h2>
            <p className="pickup-description">今、私たちが伝えたいことをピックアップして掲載しております。</p>
            
            <div ref={pickUpRef} className={`relative-container ${pickUpInView ? 'animate' : ''}`}>
                <div className="slides">
                    <div className="slides-inner">
                        {posts.map((post, index) => (
                            <div key={post.id} className="pickup-item">
                                <Link to={`/news/${post.id}`} className="pickup-card">
                                    <img 
                                        src={getFeaturedImage(post)} 
                                        alt={post.title.rendered} 
                                        className="pickup-image" 
                                    />
                                    <div className="details">
                                        <p className="date">
                                            {new Date(post.date).toLocaleDateString('ja-JP', {
                                                year: 'numeric',
                                                month: '2-digit',
                                                day: '2-digit'
                                            }).replace(/\//g, '.')}
                                            <span className="category">{getCategories(post)}</span>
                                        </p>
                                        <h3 
                                            className="pickup-title"
                                            dangerouslySetInnerHTML={{
                                                __html: post.title.rendered
                                            }}
                                        />
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pickup;
