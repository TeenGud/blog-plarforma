export const fillFunction = (singlePost: boolean, favorited: boolean, isFavorited: boolean) => {
    let fill = '';
    if (singlePost) {
        fill = favorited ? 'red' : '';
    } else if (!singlePost) {
        fill = isFavorited ? 'red' : '';
    }
    return fill;
}