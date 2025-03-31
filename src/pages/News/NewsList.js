import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import BackgroundImage from '../../components/perts/BackInsole';

import '../../styles/_news.scss'; // SCSSをインポート（パスはプロジェクト構成に合わせて変更）

function NewsList() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]); // カテゴリー一覧を保持
  const [selectedCategory, setSelectedCategory] = useState(null); // 選択されたカテゴリー
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const perPage = 10; // 1ページあたりの表示件数

  const colorbox = 'rgba(18,126,210,0.2)' // 1ページあたりの表示件数

  useEffect(() => {
    // page と per_page を指定し、?_embed を付けてメディア・カテゴリー情報もまとめて取得
    const fetchPosts = async () => {
      try {
        // カテゴリーフィルターのパラメータを追加
        const categoryParam = selectedCategory ? `&categories=${selectedCategory}` : '';
        const res = await fetch(
          `https://earu-first.com/Blog/wp-json/wp/v2/posts?_embed&per_page=${perPage}&page=${currentPage}${categoryParam}`
        );

        // ページ数などのヘッダー情報を取得
        const totalPagesHeader = res.headers.get('X-WP-TotalPages');
        if (totalPagesHeader) {
          setTotalPages(parseInt(totalPagesHeader, 10));
        }

        if (!res.ok) {
          // 404や500などエラーの場合はthrow
          throw new Error('Failed to fetch posts');
        }

        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    };

    // カテゴリーを取得する関数
    const fetchCategories = async () => {
      try {
        const res = await fetch('https://earu-first.com/Blog/wp-json/wp/v2/categories?per_page=100');
        if (!res.ok) {
          throw new Error('Failed to fetch categories');
        }
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
    fetchPosts();
  }, [currentPage, selectedCategory]);

  

  // ページャーボタンの制御
  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  // カテゴリー名を取得するヘルパー
  const getCategories = (post) => {
    // カテゴリー情報は _embedded["wp:term"][0] の配列に入っている
    if (
      post._embedded &&
      post._embedded['wp:term'] &&
      post._embedded['wp:term'][0]
    ) {
      return post._embedded['wp:term'][0].map((cat) => cat.name).join(', ');
    }
    return ''; // 取得できない場合は空文字
  };

  // アイキャッチ画像URLを取得するヘルパー
  const getFeaturedImage = (post) => {
    // アイキャッチは _embedded["wp:featuredmedia"][0].source_url に入っている場合が多い
    if (
      post._embedded &&
      post._embedded['wp:featuredmedia'] &&
      post._embedded['wp:featuredmedia'][0] &&
      post._embedded['wp:featuredmedia'][0].source_url
    ) {
      return post._embedded['wp:featuredmedia'][0].source_url;
    }
    return ''; // ない場合は空文字
  };

  // カテゴリーフィルターの変更ハンドラー
  const handleCategoryClick = (categoryId) => {
    if (selectedCategory === categoryId) {
      // 既に選択されているカテゴリーをクリックした場合、フィルターを解除
      setSelectedCategory(null);
    } else {
      // 新しいカテゴリーを選択
      setSelectedCategory(categoryId);
    }
    setCurrentPage(1); // フィルター変更時はページをリセット
  };

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    className='motion-wrapper'
    >
      <div className='body'>
        <div className="news-list-container">

          <div className='sub-section-title-container'>
            <h1 className="news-list-title sub-section-title">NEWS</h1>
            <p className="news-list-subtitle sub-section-subtitle">お知らせ</p>
          </div>

          <div className="news-list-item-wrapper">
            {/* カテゴリーフィルターのボタン */}
            <div className="news-categories">
              <button
              className={`category-button ${selectedCategory === null ? 'active' : ''}`}
              onClick={() => handleCategoryClick(null)}
            >
              全て
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-button ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => handleCategoryClick(category.id)}
              >
                {category.name}
              </button>
            ))}
            </div>

            <div className="news-list-main-container">

              {posts.length === 0 ? (
                <p className='news-list-p'>記事がありません。</p>
              ) : (
                <motion.ul 
                  className="news-list"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  key={selectedCategory}
                >
                  {posts.map((post) => {
                    const featuredImage = getFeaturedImage(post);
                    const categories = getCategories(post);
                    const postDate = new Date(post.date).toLocaleDateString('ja-JP', {
                      year: 'numeric',
                      month: 'numeric',
                      day: 'numeric',
                    });

                    return (
                      <motion.li 
                        key={post.id} 
                        className="news-item"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Link to={`/news/${post.id}`} className="news-item__link">
                          {/* アイキャッチ画像またはプレースホルダー */}
                          {featuredImage ? (
                            <div className="news-item__image">
                              <img src={featuredImage} alt={post.title.rendered} />
                            </div>
                          ) : (
                            <div className="news-item__placeholder">
                            </div>
                          )}

                          <div className="news-item__content">
                            {/* 投稿日とカテゴリー */}
                            <div className="news-item__meta">
                              <span className="news-item__date">{postDate}</span>
                              {categories && (
                                <span className="news-item__category">
                                  {categories}
                                </span>
                              )}
                            </div>

                            {/* タイトル */}
                            <h2
                              className="news-item__title news-item-title"
                              dangerouslySetInnerHTML={{
                                __html: post.title.rendered,
                              }}
                            />

                          </div>

                        </Link>
                      </motion.li>
                    );
                  })}
                </motion.ul>
              )}

              <div className="news-pagination">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage <= 1}
                  className="news-pagination__button"
                >
                  前の10件
                </button>
                <span className="news-pagination__info">
                  {currentPage} / {totalPages} ページ
                </span>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage >= totalPages}
                  className="news-pagination__button"
                >
                  次の10件
                </button>
              </div>
              
            </div>
          </div>

        </div>
        <BackgroundImage colorBox={colorbox}/>
      </div>
    </motion.div>
  );
}

export default NewsList;
