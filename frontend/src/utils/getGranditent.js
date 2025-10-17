export const getGranditent = (index) => {
    const gradients = [
        ["#FFA07A", "#f6622d"],
        ["#fd5c63", "#FA8072"],
        ["#CD5C5C", "#ec6d25"],
        ["#E0115F", "#f66d58"],
    ];

    return gradients[index % gradients.length];
}