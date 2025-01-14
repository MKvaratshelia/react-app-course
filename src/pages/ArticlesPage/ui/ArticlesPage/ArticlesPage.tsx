import { classNames } from 'shared/lib/classNames/classNames';

import { memo } from 'react';
import { Article, ArticleList, ArticleView } from 'entities/Article';
import {
    ArticleBlockType,
    ArticleType,
} from 'entities/Article/model/types/article';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            <ArticleList isLoading view={ArticleView.BIG} articles={[]} />
        </div>
    );
};

export default memo(ArticlesPage);
