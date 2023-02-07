const ratingCount = (product) => {
    let overall = 0;
    if (typeof product['comment'] !== "undefined") {
        product.comment.forEach(elem => overall = overall + elem.rate);
        overall = overall / product.comment.length;
        return overall;
    } else {
        return 5;
    }
}

export default ratingCount;