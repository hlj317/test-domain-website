let dbConf = "";

const DEV = {
    host: "127.0.0.1",
    user: "root",
    password: "123456",
    database: "beibei_wxmp",
    pro_table: "pro_article",
    pro_table_field: ["title", "content"],
    account_table: "movie_login",
    account_table_field: ["username", "password"],
    case_table: "shemore_case",
    case_table_field: ["title", "description","reply","img_url as imgUrl","video_cover_url as videoCoverUrl","video_url as videoUrl","praise_num as praiseNum","target_title as targetTitle","pid","case_type as caseType","case_label as caseLabel","gmt_modified as updateTime"],
    product_table: "shemore_product",
    product_table_field: ["title", "description","detail","price","origin_price as originPrice","img_url as imgUrl","img_target_url as imgTargetUrl","case_target_url as caseTargetUrl","appraise_num as appraiseNum","sale_num as saleNum","is_hot as isHot","cid","bid","gmt_modified as updateTime"],
    comment_table: "shemore_comment",
    comment_table_field: ["title", "type","grade","content","reply","target_url as targetUrl","user_img_url as userImgUrl","username","gmt_modified as updateTime"],
    nideshop_ad_table: "nideshop_ad",
    nideshop_ad_table_field: ["ad_position_id as adPositionId", "media_type as mediaType","name","link","image_url as imageUrl","content","end_time as endTime","enabled"]
};

const PRO = {
    host: "rm-bp12i74ni77f1xfcg.mysql.rds.aliyuncs.com",
    user: "hlj317",
    password: "@Abc$05906107#",
    database: "shemoreshop",
    account_table: "test",
    account_table_field: ["username", "password"],
    case_table: "shemore_case",
    case_table_field: ["title", "description","reply","img_url as imgUrl","video_cover_url as videoCoverUrl","video_url as videoUrl","praise_num as praiseNum","target_title as targetTitle","pid","case_type as caseType","case_label as caseLabel","gmt_modified as updateTime"],
    product_table: "shemore_product",
    product_table_field: ["title", "description","detail","price","origin_price as originPrice","img_url as imgUrl","img_target_url as imgTargetUrl","case_target_url as caseTargetUrl","appraise_num as appraiseNum","sale_num as saleNum","is_hot as isHot","cid","bid","gmt_modified as updateTime"],
    comment_table: "shemore_comment",
    comment_table_field: ["title", "type","grade","content","reply","target_url as targetUrl","user_img_url as userImgUrl","username","gmt_modified as updateTime"],
    nideshop_ad_table: "nideshop_ad",
    nideshop_ad_table_field: ["ad_position_id as adPositionId", "media_type as mediaType","name","link","image_url as imageUrl","content","end_time as endTime","enabled"]
};

if (process.env.NODE_ENV === "dev") {
    dbConf = DEV;
} else {
    dbConf = PRO;
}

module.exports = dbConf;
